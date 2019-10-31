import { Photon } from '@generated/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
function main() {
  photon.users.create({
    data: {
      email: 'Harshit Pant',
      name: 'Harshit',
    },
  })
}

main()
