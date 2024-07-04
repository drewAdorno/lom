import re

# Path to the input file

input_file = 'C:\\Users\\drewa\\Desktop\\lom\\index.1d10b.js'

# Function to extract the filename from the System.register call
def extract_filename(line):
    match = re.search(r'System\.register\("chunks:///_virtual/(.+?)"', line)
    if match:
        return match.group(1)
    return None

# Open the input file and process it
with open(input_file, 'r', encoding='utf-8') as file:
    current_file = None
    output_file = None
    
    for line in file:
        # Check if the line contains a new System.register call
        filename = extract_filename(line)
        if filename:
            # Close the current output file if it's open
            if output_file:
                output_file.close()
            
            # Open a new output file for writing
            current_file = filename
            output_file = open(current_file, 'w', encoding='utf-8')
        
        # Write the line to the current output file
        if output_file:
            output_file.write(line)
    
    # Close the last output file
    if output_file:
        output_file.close()
