import fs from 'fs';

export const replaceTemplateSyntax = (filePath) => {
  // Đọc nội dung file
  let content = fs.readFileSync(filePath, 'utf-8');

  // Thay thế nội dung
  content = content.replace(/\{\{(.*?)\}\}/g, '<%= $1 %>');

  // Ghi đè lại file
  fs.writeFileSync(filePath, content, 'utf-8');

  console.log('✅ Replace done in', filePath);
};
