// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
// \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.


function getFileName(filePath) {

  const parts = filePath.split(/[\\/\.]/);
  const NameExtension = parts[parts.length - 2];
  const NameParts = NameExtension.split(".");
  const NameWitExtension = NameParts[0];

  return NameWitExtension;
}

const filePath = 'c:\\WebServers\\home\\testsite\\www\\myfile.txt';
const NameWitExtension = getFileName(filePath);
console.log(NameWitExtension); // 'myfile'