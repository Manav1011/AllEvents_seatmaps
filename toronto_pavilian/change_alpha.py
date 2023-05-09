file = open('bottom.xml')
updated_content = ""
for i in file:
    for j in i:
        if j.isalpha() and j in ("A","B","C","D","E","F","G",'H','I','J','K','L','M','N','O','P','Q','R'):
            if j == 'Z':
                updated_content += 'A'
            else:
                char_code = ord(j)
                updated_content += chr(char_code + 1)
        else:
            updated_content += j
            
print(updated_content)