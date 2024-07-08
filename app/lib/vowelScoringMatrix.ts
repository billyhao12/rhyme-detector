const vowelScoringMatrix = {
  AA: {
    AA: 2.3,
    AE: -3.3,
    AH: -0.8,
    AO: 1.6,
    AW: -1.7,
    AY: -2.7,
    EH: -7.2,
    ER: -0.6,
    EY: -3.9,
    IH: -4.8,
    IY: -3.9,
    OW: -1.0,
    OY: -1.7,
    UH: -3.3,
    UW: -3.9
  },
  AE: {
    AE: 2.1,
    AH: -1.5,
    AO: -6.6,
    AW: -1.9,
    AY: -3.3,
    EH: -1.5,
    ER: -3.4,
    EY: -1.8,
    IH: -2.0,
    IY: -4.3,
    OW: -4.6,
    OY: -4.5,
    UH: -3.7,
    UW: -6.7
  },
  AH: {
    AH: 2.2,
    AO: -1.2,
    AW: -1.4,
    AY: -1.4,
    EH: -0.6,
    ER: -0.2,
    EY: -1.7,
    IH: -0.3,
    IY: -3.0,
    OW: -1.0,
    OY: -0.6,
    UH: -0.9,
    UW: -1.5
  },
  AO: {
    AO: 3.1,
    AW: -1.0,
    AY: -3.8,
    EH: -6.5,
    ER: -1.1,
    EY: -3.9,
    IH: -4.2,
    IY: -6.3,
    OW: -0.3,
    OY: -0.4,
    UH: 1.1,
    UW: -3.3
  },
  AW: {
    AW: 3.8,
    AY: -0.3,
    EH: -6.0,
    ER: -4.2,
    EY: -5.7,
    IH: -6.0,
    IY: -5.7,
    OW: -2.0,
    OY: -2.9,
    UH: -4.5,
    UW: -1.4
  },
  AY: {
    AY: 2.5,
    EH: -4.2,
    ER: -1.1,
    EY: -7.0,
    IH: -1.8,
    IY: -3.2,
    OW: -4.3,
    OY: -1.1,
    UH: -5.7,
    UW: -6.4
  },
  EH: {
    EH: 1.9,
    ER: -1.2,
    EY: -1.5,
    IH: 0.2,
    IY: -2.1,
    OW: -7.0,
    OY: -4.5,
    UH: -6.1,
    UW: -4.3
  },
  ER: {
    ER: 3.9,
    EY: -5.6,
    IH: -1.5,
    IY: -5.5,
    OW: -1.6,
    OY: -2.7,
    UH: -1.3,
    UW: -2.6
  },
  EY: {
    EY: 2.5,
    IH: -3.4,
    IY: -2.7,
    OW: -4.4,
    OY: -4.3,
    UH: -5.8,
    UW: -6.5
  },
  IH: {
    IH: 2.0,
    IY: -0.9,
    OW: -7.1,
    OY: 0.2,
    UH: -2.2,
    UW: -3.7
  },
  IY: {
    IY: 2.4,
    OW: -4.4,
    OY: -4.2,
    UH: -5.8,
    UW: -6.4
  },
  OW: {
    OW: 2.8,
    OY: -4.0,
    UH: -2.5,
    UW: -1.5
  },
  OY: {
    OY: 4.9,
    UH: 0.1,
    UW: -3.7
  },
  UH: {
    UH: 2.6,
    UW: -0.5
  },
  UW: {
    UW: 3.1
  }
};

export default vowelScoringMatrix;
