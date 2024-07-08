const consonantScoringMatrix = {
    B: {
        B: 4.3,
        CH: -4.8,
        D: 1.1,
        DH: 0.4,
        F: -5.5,
        G: 1.9,
        JH: 1.9,
        K: -6.9,
        L: -0.3,
        M: -0.5,
        N: -1.6,
        NG: -5.5,
        P: 0.1,
        R: -0.9,
        S: -1.6,
        SH: -4.6,
        T: -1.0,
        TH: -4.3,
        V: 2.3,
        Z: 0.3,
        ZH: -2.5,
        "_*": -0.6,
        "*_": -1.5
    },
    CH: {
        CH: 4.2,
        D: -1.6,
        DH: -4.9,
        F: -0.3,
        G: 0.3,
        JH: 0.4,
        K: 1.5,
        L: -6.8,
        M: -6.6,
        N: -2.8,
        NG: -5.5,
        P: 1.1,
        R: -6.7,
        S: 0.3,
        SH: 0.6,
        T: 0.9,
        TH: 1.4,
        V: -6.1,
        Z: -2.0,
        ZH: -2.5,
        "_*": -6.0,
        "*_": -2.6
    },
    D: {
        D: 2.3,
        DH: -7.0,
        F: -7.6,
        G: 0.1,
        JH: 0.2,
        K: -3.1,
        L: -1.7,
        M: -2.2,
        N: -2.2,
        NG: -3.0,
        P: -1.8,
        R: -0.9,
        S: -9.0,
        SH: -2.1,
        T: 0.2,
        TH: 0.0,
        V: -0.2,
        Z: 0.0,
        ZH: -4.6,
        "_*": -0.2,
        "*_": 1.2
    },
    DH: {
        DH: 3.5,
        F: -5.6,
        G: -5.1,
        JH: -4.2,
        K: -0.4,
        L: -0.2,
        M: -2.0,
        N: -7.5,
        NG: -5.6,
        P: -6.2,
        R: -1.4,
        S: -7.0,
        SH: -4.8,
        T: -0.3,
        TH: 1.3,
        V: 2.8,
        Z: 1.1,
        ZH: -2.6,
        "_*": -6.0,
        "*_": -3.4
    },
    F: {
        F: 3.4,
        G: -1.2,
        JH: -4.9,
        K: -0.3,
        L: -1.5,
        M: -1.3,
        N: -3.5,
        NG: -1.6,
        P: 1.1,
        R: -2.7,
        S: 1.1,
        SH: 1.2,
        T: -0.9,
        TH: 4.0,
        V: 0.6,
        Z: -7.3,
        ZH: -3.2,
        "_*": -1.4,
        "*_": -2.9
    },
    G: {
        G: 4.2,
        JH: 1.9,
        K: 0.0,
        L: -0.2,
        M: -1.0,
        N: -1.9,
        NG: -5.7,
        P: -0.6,
        R: -0.8,
        S: -2.5,
        SH: -4.9,
        T: -1.1,
        TH: -4.5,
        V: 0.3,
        Z: -0.3,
        ZH: -2.7,
        "_*": -0.9,
        "*_": -2.8
    },
    JH: {
        JH: 5.2,
        K: -6.3,
        L: -1.5,
        M: 0.1,
        N: -0.5,
        NG: -4.8,
        P: -0.2,
        R: -0.3,
        S: -0.6,
        SH: 0.6,
        T: -1.1,
        TH: -3.6,
        V: 1.4,
        Z: 1.0,
        ZH: 4.1,
        "_*": -5.3,
        "*_": 0.5
    },
    K: {
        K: 2.6,
        L: -2.9,
        M: -2.1,
        N: -2.6,
        NG: -1.3,
        P: 1.7,
        R: -2.1,
        S: -0.7,
        SH: -0.6,
        T: 0.9,
        TH: 0.5,
        V: -1.8,
        Z: -3.1,
        ZH: -4.7,
        "_*": -1.0,
        "*_": -1.8
    },
    L: {},
    M: {},
    N: {},
    NG: {},
    P: {},
    R: {},
    S: {},
    SH: {},
    T: {},
    TH: {},
    V: {},
    Z: {},
    ZH: {},
    "_*": {},
    "*_": {}
}

export default consonantScoringMatrix;
