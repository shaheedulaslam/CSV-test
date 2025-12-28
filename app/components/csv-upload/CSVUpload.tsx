/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, ChangeEvent, useRef } from "react";
import {
  Upload,
  FileText,
  X,
  Loader2,
  Check,
  Database,
  Eye,
  Download,
  FileUp,
  FileCheck,
} from "lucide-react";
import { parseCSV } from "@/app/lib/utils";
import { Box } from "../ui/Box";
import { Stack } from "../ui/Stack";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";

export const CsvUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [csvData, setCsvData] = useState<{
    headers: string[];
    rows: Record<string, any>[];
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "text/csv" || file.name.endsWith(".csv"))) {
      setSelectedFile(file);
      setUploadSuccess(false);
      setCsvData(null);
    } else {
      alert("Please select a valid CSV file.");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);

    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const parsedData = parseCSV(text);
        setCsvData(parsedData);
        setUploadSuccess(true);
        setIsUploading(false);
      };
      reader.readAsText(selectedFile);
    }, 1000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file && (file.type === "text/csv" || file.name.endsWith(".csv"))) {
      setSelectedFile(file);
      setUploadSuccess(false);
      setCsvData(null);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setCsvData(null);
    setUploadSuccess(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      {/* Upload Section */}
      <Box className="mb-8">
        <Box
          className={`border-3 border-dashed rounded-xl transition-all duration-300 ${
            selectedFile
              ? "border-blue-500 bg-blue-50/20"
              : "border-gray-300 hover:border-blue-400 hover:bg-gray-50/50"
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => !selectedFile && fileInputRef.current?.click()}
          padding="lg"
        >
          {!selectedFile ? (
            <Stack gap="sm" align="center">
              <Box className="w-20 h-20 rounded-full bg-linear-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <Upload className="w-10 h-10 text-blue-600" />
              </Box>
              <Stack gap="xs" align="center">
                <Text size="xl" weight="semibold">
                  Drop your CSV file here
                </Text>
                <Text color="muted">or click to browse files</Text>
              </Stack>

              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
              />

              <Button
                size="lg"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="mt-4"
              >
                <FileUp className="w-5 h-5 mr-2" />
                Select CSV File
              </Button>

              <Text size="sm" color="muted" className="mt-4">
                Supports .csv files up to 100MB
              </Text>
            </Stack>
          ) : (
            <Stack gap="md" align="center">
              <Box className="w-20 h-20 rounded-full bg-linear-to-r from-green-100 to-emerald-100 flex items-center justify-center">
                <FileText className="w-10 h-10 text-green-600" />
              </Box>

              <Stack gap="xs" align="center">
                <Text size="xl" weight="semibold" className="text-center">
                  {selectedFile.name}
                </Text>
                <Text size="lg" color="muted">
                  {(selectedFile.size / 1024).toFixed(1)} KB • Ready to upload
                </Text>
              </Stack>

              <Stack direction="horizontal" gap="sm" className="mt-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearFile();
                  }}
                >
                  <X className="w-5 h-5 mr-2" />
                  Remove File
                </Button>
                <Button
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  <FileCheck className="w-5 h-5 mr-2" />
                  Change File
                </Button>
              </Stack>
            </Stack>
          )}
        </Box>
      </Box>

      {/* Upload Button */}
      <Box className="mb-8">
        <Button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
          fullWidth
          className="h-16 text-lg"
        >
          {isUploading ? (
            <Stack direction="horizontal" gap="sm" align="center">
              <Loader2 className="w-6 h-6 animate-spin" />
              <Text>Processing CSV Data...</Text>
            </Stack>
          ) : selectedFile ? (
            `Upload "${selectedFile.name}"`
          ) : (
            "Select a file to upload"
          )}
        </Button>
      </Box>

      {/* Success Message */}
      {uploadSuccess && (
        <Box className="mb-8 animate-fade-in">
          <Box className="p-6 bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
            <Stack direction="horizontal" gap="sm" align="center">
              <Box className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-7 h-7 text-green-600" />
              </Box>
              <Stack gap="xs">
                <Text size="xl" weight="bold" color="success">
                  Upload Successful!
                </Text>
                <Text size="lg" color="success">
                  {csvData?.rows.length} rows • {csvData?.headers.length}{" "}
                  columns processed
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      )}

      {/* FULL WIDTH CSV DATA PREVIEW */}
      {csvData && csvData.rows.length > 0 && (
        <Box className="mt-12">
          {/* Preview Header */}
          <Box className="mb-6">
            <Stack direction="horizontal" align="center" justify="between">
              <Stack direction="horizontal" gap="sm" align="center">
                <Database className="w-8 h-8 text-blue-600" />
                <Text as="h2" size="3xl" weight="bold">
                  CSV Data Preview
                </Text>
              </Stack>
              <Stack direction="horizontal" gap="sm" align="center">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </Stack>
            </Stack>
            <Stack
              direction="horizontal"
              gap="md"
              align="center"
              className="mt-4"
            >
              <Stack direction="horizontal" gap="xs" align="center">
                <Eye className="w-4 h-4 text-gray-500" />
                <Text color="muted">{csvData.rows.length} total rows</Text>
              </Stack>
              <Stack direction="horizontal" gap="xs" align="center">
                <FileText className="w-4 h-4 text-gray-500" />
                <Text color="muted">{csvData.headers.length} columns</Text>
              </Stack>
              <Stack direction="horizontal" gap="xs" align="center">
                <FileCheck className="w-4 h-4 text-gray-500" />
                <Text color="muted">File: {selectedFile?.name}</Text>
              </Stack>
            </Stack>
          </Box>

          {/* Table Container - Full Width */}
          {/* CSV Table */}
          <Box className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <Box className="relative overflow-x-auto">
              <table className="min-w-full border-collapse">
                {/* TABLE HEADER */}
                <thead className="sticky top-0 z-10 bg-gray-100 border-b border-gray-200">
                  <tr>
                    {csvData.headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-5 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* TABLE BODY */}
                <tbody>
                  {csvData.rows.slice(0, 50).map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`
              transition-colors
              ${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              hover:bg-blue-50/40
            `}
                    >
                      {csvData.headers.map((header, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-5 py-3 text-sm text-gray-800 whitespace-nowrap max-w-70 truncate"
                          title={row[header] ?? ""}
                        >
                          {row[header] ? (
                            row[header]
                          ) : (
                            <span className="text-gray-400 italic">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>

            {/* TABLE FOOTER */}
            <Box className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <Stack direction="horizontal" justify="between" align="center">
                <Text size="sm" color="muted">
                  Showing {Math.min(50, csvData.rows.length)} of{" "}
                  {csvData.rows.length} rows
                </Text>
                <Text size="sm" color="muted">
                  {csvData.headers.length} columns
                </Text>
              </Stack>
            </Box>
          </Box>

          {/* Data Summary - Full Width Grid */}
          <Box className="mt-8">
            <Text as="h3" size="xl" weight="semibold" className="mb-4">
              Data Summary
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SummaryStat
                title="Total Rows"
                value={csvData.rows.length.toString()}
                color="blue"
                icon={<Database className="w-5 h-5" />}
              />
              <SummaryStat
                title="Total Columns"
                value={csvData.headers.length.toString()}
                color="green"
                icon={<FileText className="w-5 h-5" />}
              />
              <SummaryStat
                title="File Size"
                value={`${(selectedFile?.size
                  ? selectedFile.size / 1024
                  : 0
                ).toFixed(1)} KB`}
                color="purple"
                icon={<FileCheck className="w-5 h-5" />}
              />
              <SummaryStat
                title="Status"
                value="Processed ✓"
                color="amber"
                icon={<Check className="w-5 h-5" />}
              />
            </div>
          </Box>
        </Box>
      )}
    </div>
  );
};

// Summary Stat Component
function SummaryStat({
  title,
  value,
  color,
  icon,
}: {
  title: string;
  value: string;
  color: string;
  icon: React.ReactNode;
}) {
  const bgColors: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100",
    green: "bg-green-50 border-green-100",
    purple: "bg-purple-50 border-purple-100",
    amber: "bg-amber-50 border-amber-100",
  };

  const textColors: Record<string, string> = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    amber: "text-amber-600",
  };

  return (
    <Box className={`p-4 rounded-lg border ${bgColors[color]}`}>
      <Stack gap="sm">
        <Stack direction="horizontal" gap="sm" align="center">
          <Box className={`p-2 rounded-lg ${textColors[color]} bg-white`}>
            {icon}
          </Box>
          <Text size="xs" weight="medium" className="text-gray-600 uppercase">
            {title}
          </Text>
        </Stack>
        <Text size="2xl" weight="bold" className="text-gray-900">
          {value}
        </Text>
      </Stack>
    </Box>
  );
}
