module.exports = {
    app: {
        token: 'MTA2NzQzOTYyNjM2Njc2MzA4MA.Go4236.XHBP-C4M-DKPj6TwVNMs_Hocup_2b9P9RcG8Xg',
        playing: 'by WolfAsi4n',
        global: true,
        guild: '767377621100003369'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'bot',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
