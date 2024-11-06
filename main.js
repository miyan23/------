const { exec } = require('child_process');  
  
function openInBrowser(url) {  
  // 对于不同的操作系统，可能需要使用不同的命令来打开浏览器  
  // 这里以 Windows 为例，使用 start 命令  
  if (process.platform === 'win32') {  
    exec(`start ${url}`, (error, stdout, stderr) => {  
      if (error) {  
        console.error(`执行出错: ${error}`);  
        return;  
      }  
      console.log(`已打开: ${url}`);  
    });  
  } else if (process.platform === 'darwin') {  
    // macOS 系统使用 open 命令  
    exec(`open ${url}`, (error, stdout, stderr) => {  
      if (error) {  
        console.error(`执行出错: ${error}`);  
        return;  
      }  
      console.log(`已打开: ${url}`);  
    });  
  } else {  
    // Linux 系统通常使用 xdg-open 
    exec(`xdg-open ${url}`, (error, stdout, stderr) => {  
      if (error) {  
        console.error(`执行出错: ${error}`);  
        return;  
      }  
      console.log(`已打开: ${url}`);  
    });  
  }  
}  
  
// 使用函数  
openInBrowser('./login.html');