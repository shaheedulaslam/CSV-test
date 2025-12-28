import { CsvUpload } from "./components/csv-upload/CSVUpload";
import { Upload, Database, Shield, BarChart, FileText, CheckCircle } from "lucide-react";
import { Box } from "./components/ui/Box";
import { Stack } from "./components/ui/Stack";
import { Text } from "./components/ui/Text";

export default function Home() {
  return (
    <Box className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30">
      {/* Header section */}
      <Box className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <Box className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Stack direction="horizontal" align="center" justify="between">
            <Stack direction="horizontal" gap="sm" align="center">
              <Box className="p-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500">
                <Database className="w-6 h-6 text-white" />
              </Box>
              <Text as="h1" size="xl" weight="bold">B2B Data Importer</Text>
            </Stack>
            
            <Stack direction="horizontal" gap="sm" align="center">
              <Box className="px-3 py-1 rounded-full bg-green-50 border border-green-200">
                <Stack direction="horizontal" gap="xs" align="center">
                  <Shield className="w-3 h-3 text-green-600" />
                  <Text size="xs" weight="medium" color="success">Secure</Text>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Main content - Full width */}
      <Box className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Stack gap="lg" align="center">
          {/* Hero section */}
          <Box>
            <Stack gap="md" align="center" className="">
              <Text 
                as="h2" 
                size="3xl" 
                weight="bold"
                className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              >
                Import Billing Data
              </Text>
              <Text 
                size="lg" 
                color="muted" 
                className="max-w-2xl"
              >
                Upload CSV files to import billing or invoice data. All processing happens in your browser for maximum security.
              </Text>
            </Stack>
          </Box>

          {/* Feature highlights - Full width */}
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureItem 
              icon={<Upload className="w-5 h-5 text-blue-600" />}
              title="Drag & Drop"
              description="Simply drag your CSV file or click to browse"
            />
            <FeatureItem 
              icon={<FileText className="w-5 h-5 text-green-600" />}
              title="Real-time Preview"
              description="See your data immediately after upload"
            />
            <FeatureItem 
              icon={<BarChart className="w-5 h-5 text-purple-600" />}
              title="Data Insights"
              description="Get automatic analysis of your billing data"
            />
          </Box>

          {/* Upload area - Full width without card wrapper */}
          <Box>
            <CsvUpload />
          </Box>

          {/* How it works - Full width */}
          <Box className="mt-12">
            <Text as="h3" size="xl" weight="semibold" className="mb-6 text-center">
              How to Import Your Data
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepItem 
                number={1}
                title="Prepare Your CSV"
                description="Ensure your CSV file has proper headers like 'Invoice ID', 'Amount', 'Date', etc."
              />
              <StepItem 
                number={2}
                title="Upload File"
                description="Drag & drop or click to select your CSV file"
              />
              <StepItem 
                number={3}
                title="Review & Confirm"
                description="Preview your data and confirm the import"
              />
            </div>
          </Box>
        </Stack>
      </Box>

      {/* Footer */}
      <Box className="mt-12 border-t border-gray-200 bg-white">
        <Box className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Stack direction="horizontal" align="center" justify="between">
            <Text size="sm" color="muted">
              © 2024 B2B Data Importer. All rights reserved.
            </Text>
            <Stack direction="horizontal" gap="md" align="center">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <Text size="sm" color="muted">100% Client-side Processing</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

// Feature Item Component
function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Stack gap="sm" align="center" className="text-center p-6">
      <Box className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
        {icon}
      </Box>
      <Text weight="semibold">{title}</Text>
      <Text size="sm" color="muted">{description}</Text>
    </Stack>
  );
}

// Step Item Component
function StepItem({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <Stack gap="sm" align="center" className="text-center">
      <Box className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <Text weight="bold" className="text-white">{number}</Text>
      </Box>
      <Text weight="semibold">{title}</Text>
      <Text size="sm" color="muted">{description}</Text>
    </Stack>
  );
}