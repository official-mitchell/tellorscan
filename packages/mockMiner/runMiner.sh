#!/bin/sh

RINKEBY_URL="wss://rinkeby.infura.io/ws/v3/fbb0461697da49bb8c2815a43b97fc45";
LOCAL_URL="ws://localhost:8545";

#RINKEBY_ADDR="0xD43051dc258BE91f02B7C3d2c08fFe0085503BC2";
RINKEBY_ADDR="0xDae06771E342fc7A8BddBe9b159bB9fa8cE4D626"
LOCAL_ADDR="0x2B63d6e98E66C7e9fe11225Ba349B0B33234D9A2";

SLEEP_TIME="1m";

INIT_REQUIRED="$1" MINE_SLEEP_CYCLE=${SLEEP_TIME} WEB3_URL=${LOCAL_URL} CONTRACT_ADDRESS=${LOCAL_ADDR} node dist/index.js
