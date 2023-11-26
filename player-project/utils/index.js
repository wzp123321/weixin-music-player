/**
 * 图片转base64
 * @param {*} filePath 
 */
export function mapImageToBase64(filePath) {
  return new Promise((resolve, reject) => {
    const base64 = wx.getFileSystemManager().readFileSync(filePath, "base64")
    console.log(base64)
    const baseFormat = 'data:image/png;base64,'
    resolve(baseFormat + base64)
  })
}