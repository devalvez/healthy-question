// import type { Config } from 'jest'
import type { Config } from '@jest/types';
import nextJest from 'next/jest.js'
import type { JestConfigWithTsJest } from 'ts-jest';
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config.InitialOptions = {
  verbose: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/default-esm',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['./next', 'node_modules'],
  moduleNameMapper: {
    // ...
    '^@/components/(.*)$': '<rootDir>/components/$1',
  }
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)