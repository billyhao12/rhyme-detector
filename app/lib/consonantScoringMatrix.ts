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
  L: {
    L: 2.8,
    M: -1.8,
    N: -1.8,
    NG: -2.8,
    P: -8.1,
    R: -0.5,
    S: -2.9,
    SH: -6.6,
    T: -2.9,
    TH: -6.3,
    V: -1.3,
    Z: -1.6,
    ZH: -4.5,
    "_*": 0.4,
    "*_": -1.0
  },
  M: {
    M: 2.7,
    N: 1.8,
    NG: 0.7,
    P: -3.2,
    R: -1.2,
    S: -2.9,
    SH: -1.1,
    T: -2.5,
    TH: 0.4,
    V: -0.6,
    Z: -3.7,
    ZH: -4.2,
    "_*": -0.8,
    "*_": -1.7
  },
  N: {
    N: 2.2,
    NG: 1.2,
    P: -2.5,
    R: -1.0,
    S: -2.3,
    SH: -0.7,
    T: -1.5,
    TH: -0.6,
    V: -1.5,
    Z: -2.1,
    ZH: -5.1,
    "_*": -0.4,
    "*_": -2.3
  },
  NG: {
    NG: 4.1,
    P: -6.8,
    R: -2.7,
    S: -2.3,
    SH: -5.3,
    T: -3.5,
    TH: -5.0,
    V: -2.1,
    Z: -2.0,
    ZH: -3.2,
    "_*": 0.2,
    "*_": -3.9
  },
  P: {
    P: 3.3,
    R: -2.0,
    S: -1.1,
    SH: -0.7,
    T: 1.1,
    TH: 0.9,
    V: -0.6,
    Z: -7.9,
    ZH: -3.8,
    "_*": -0.7,
    "*_": -0.8
  },
  R: {
    R: 2.8,
    S: -2.3,
    SH: -0.8,
    T: -1.2,
    TH: -6.1,
    V: -2.1,
    Z: -2.2,
    ZH: -4.3,
    "_*": 1.7,
    "*_": -0.7
  },
  S: {
    S: 2.6,
    SH: 2.4,
    T: -1.0,
    TH: 1.0,
    V: -2.4,
    Z: 0.5,
    ZH: 0.0,
    "_*": 0.6,
    "*_": 0.6
  },
  SH: {
    SH: 5.2,
    T: -0.6,
    TH: -4.1,
    V: -1.3,
    Z: -0.2,
    ZH: 3.6,
    "_*": -5.8,
    "*_": -7.7
  },
  T: {
    T: 1.7,
    TH: 1.6,
    V: -0.9,
    Z: -9.2,
    ZH: -5.2,
    "_*": 0.0,
    "*_": 0.7
  },
  TH: {
    TH: 4.4,
    V: 0.5,
    Z: -6.1,
    ZH: -2.0,
    "_*": -5.4,
    "*_": -0.6
  },
  V: {
    V: 2.9,
    Z: -0.4,
    ZH: 1.6,
    "_*": -1.2,
    "*_": -1.7
  },
  Z: {
    Z: 2.6,
    ZH: 3.0,
    "_*": -1.3,
    "*_": 1.1
  },
  ZH: {
    ZH: 6.8,
    "_*": -3.7,
    "*_": -5.6
  }
};

export default consonantScoringMatrix;
