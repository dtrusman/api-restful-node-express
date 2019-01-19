import { server } from "@server/server";

const PORT = 3000; // Defautl port

const message = (msg) => `.,.  .,. 
.,,  .,, 
.,,.,,   ${msg}
.,, .,,. 
.,,   ,,.
`;

server.listen(PORT, () => {
    console.log(message(`Server started successfully on port ${PORT}!`));
    // console.log(`------------- ${ConfigService.environment} MODE -------------\n`);
    // if (ConfigService.isInDevMode) {
    //     console.log("            Use this Token              \n");
    //     const fakeToken = AuthRepository.generateFakeToken();
    //     console.log(`${JSON.stringify(fakeToken)}\n`);
    // }
});