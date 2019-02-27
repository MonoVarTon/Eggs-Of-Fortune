import DCWebapi from '@daocasino/dc-webapi'
import Main from './src/main.js'

document.addEventListener('DOMContentLoaded', async () => {
  const params = {
    platformId: 'DC_CloudPlatform',
    blockchainNetwork: 'ropsten',
    privateKey: '0xaa3680d5d48a8283413f7a108367c7299ca73f553735860a87b08f39395618b7'
  }
  const webapi = new DCWebapi(params)
  const { account, game } = await webapi.init()
  window.account = account
  window.game = game
  new Main()
})
