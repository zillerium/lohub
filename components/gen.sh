#!/bin/bash

# Target directory
DIR="startupText"

# Create directory if it doesn't exist
mkdir -p "$DIR"

# Declare an associative array of filenames and their sample content
declare -A sections=(
  ["problemDefinition"]="Problem Definition: This section defines the specific problem or pain point that the startup addresses."
  ["targetMarket"]="Target Market: This section outlines who the startup is targeting and the size of the opportunity."
  ["uniqueValue"]="Unique Value Proposition: This section explains what makes the startup's solution different and valuable."
  ["businessModel"]="Business Model: This section describes how the startup will make money and sustain operations."
  ["feasibility"]="Feasibility and Technical Complexity: This section analyzes whether the idea is technically viable and scalable."
  ["competition"]="Competition and Alternatives: This section compares the startup with existing solutions in the market."
  ["goToMarket"]="Go-to-Market Strategy: This section defines how the startup will reach and acquire its first users or customers."
  ["founderFit"]="Founder Fit and Motivation: This section evaluates the founder's background and commitment to solving the problem."
  ["risks"]="Risks and Challenges: This section covers potential obstacles and how the startup plans to overcome them."
  ["vision"]="Vision and Scalability: This section shares the long-term impact and growth potential of the idea."
)

# Loop through and create each file
for key in "${!sections[@]}"; do
  echo "export const $key = \"${sections[$key]}\";" > "$DIR/$key.ts"
  echo "Created: $DIR/$key.ts"
done

