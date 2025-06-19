import ProbDefText from './ProbDefText';
import TargetMarketText from './TargetMarketText';

export const promptTemplates = [
  {
    label: '🔹 Problem Definition',
    generatePrompt: (input: string) =>
      ProbDefText.replace('${input}', input.trim()),
  },
  {
    label: '🔹 Target Market',
    generatePrompt: (input: string) =>
      TargetMarketText.replace('${input}', input.trim()),
  },
  // Add remaining prompt entries here
];

