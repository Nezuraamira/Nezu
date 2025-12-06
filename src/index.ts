// BANNER ALFIAN
const showNezuraBanner = () => {
  console.log(`
 █████╗ ██╗     ███████╗██╗ █████╗ ███╗   ██╗
██╔══██╗██║     ██╔════╝██║██╔══██╗████╗  ██║
███████║██║     █████╗  ██║███████║██╔██╗ ██║
██╔══██║██║     ██╔══╝  ██║██╔══██║██║╚██╗██║
██║  ██║███████╗██║     ██║██║  ██║██║ ╚████║
╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

          WhatsApp Bot Library
              by ALFIAN 🜲
  `)
}

// Jalankan sekali saat library di-load
showNezuraBanner()


import makeWASocket from './Socket/index'

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
