import { Web5 } from 'https://cdn.jsdelivr.net/npm/@web5/api@0.8.2/dist/browser.mjs';;
// Initiate web5 connect
const { web5, did: myDid } = await Web5.connect();
import ProtocolDefinition from './helper/ProductProtocol';



//install protocol
async function configProtocol() {
    const { protocol, status } = await web5.dwn.protocols.configure({
        message: {
            definition: ProtocolDefinition,
        },
    });
    protocol.send(myDid);
    console.log(status);
    document.getElementById('configProtocolInfo').innerHTML =
        JSON.stringify(status);
}

//doublecheck it is installed
async function queryProtocol() {
    const { protocols } = await web5.dwn.protocols.query({
        message: {
            filter: {
                protocol: 'OmniVerse',
            },
        },
    });
    console.log(protocols);
    document.getElementById('queryProtocolInfo').innerHTML =
        'Installed protocol: ' +
        JSON.stringify(protocols[0].definition.protocol);
}

//Check what your DID is
async function seeDid() {
    document.getElementById('seeDidInfo').innerHTML = myDid;
}
