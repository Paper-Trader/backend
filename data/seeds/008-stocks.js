
exports.seed = function(knex) {
  return knex('stocks')
    .then(function () {
      return knex('stocks').insert([
        {symbol : "FFNW"}, 
        {symbol : "GHDX"}, 
        {symbol : "IWC"}, 
        {symbol : "XOM"}, 
        {symbol : "ENZL"}, 
        {symbol : "XYN"}, 
        {symbol : "PBTS"}, 
        {symbol : "EXA"}, 
        {symbol : "MSTR"}, 
        {symbol : "FSMD"}, 
        {symbol : "HAUZ"}, 
        {symbol : "AXNX"}, 
        {symbol : "ITP"}, 
        {symbol : "CORR"}, 
        {symbol : "KYN-F"}, 
        {symbol : "HFFG"}, 
        {symbol : "BPRN"}, 
        {symbol : "BVN"}, 
        {symbol : "CZNC"}, 
        {symbol : "BCACW"}, 
        {symbol : "HTBX"}, 
        {symbol : "EQT"}, 
        {symbol : "GXF"}, 
        {symbol : "YAO"}, 
        {symbol : "DTEC"}, 
        {symbol : "VFF"}, 
        {symbol : "FLCA"}, 
        {symbol : "HPF"}, 
        {symbol : "ZTR"}, 
        {symbol : "BANC"}, 
        {symbol : "TDW+"}, 
        {symbol : "SCHW-C"}, 
        {symbol : "ARAY"}, 
        {symbol : "GSL-B"}, 
        {symbol : "XTL"}, 
        {symbol : "MCRI"}, 
        {symbol : "ENRJ"}, 
        {symbol : "LVS"}, 
        {symbol : "NEOG"}, 
        {symbol : "ROCK"}, 
        {symbol : "OMC"}, 
        {symbol : "SUSB"}, 
        {symbol : "ATOS"}, 
        {symbol : "CMRE-D"}, 
        {symbol : "EFAX"}, 
        {symbol : "JHX"}, 
        {symbol : "IGIB"}, 
        {symbol : "EMES"}, 
        {symbol : "SNE"}, 
        {symbol : "TMCX"}, 
        {symbol : "HBM"}, 
        {symbol : "OXFD"}, 
        {symbol : "INWK"}, 
        {symbol : "GHS"}, 
        {symbol : "WAFD"}, 
        {symbol : "JCS"}, 
        {symbol : "RLJ"}, 
        {symbol : "DIVA"}, 
        {symbol : "VSGX"}, 
        {symbol : "BMA"}, 
        {symbol : "SDPI"}, 
        {symbol : "AZZ"}, 
        {symbol : "OMP"}, 
        {symbol : "ARKW"}, 
        {symbol : "TAST"}, 
        {symbol : "OZM"}, 
        {symbol : "TA"}, 
        {symbol : "MER-P*"}, 
        {symbol : "SMM"}, 
        {symbol : "PPT"}, 
        {symbol : "BHLB"}, 
        {symbol : "DDE"}, 
        {symbol : "INTC"}, 
        {symbol : "HR"}, 
        {symbol : "OVBC"}, 
        {symbol : "VOO"}, 
        {symbol : "MTGE"}, 
        {symbol : "CRCM"}, 
        {symbol : "CRHM"}, 
        {symbol : "IMOS"}, 
        {symbol : "HP"}, 
        {symbol : "GNT-A"}, 
        {symbol : "AVXS"}, 
        {symbol : "LEG"}, 
        {symbol : "CPT"}, 
        {symbol : "OB"}, 
        {symbol : "KOPN"}, 
        {symbol : "HACV"}, 
        {symbol : "EVSI"}, 
        {symbol : "EMI"}, 
        {symbol : "GWW"}, 
        {symbol : "MNTX"}, 
        {symbol : "SKYS"}, 
        {symbol : "GLD"}, 
        {symbol : "EMTL"}, 
        {symbol : "SITC"}, 
        {symbol : "CLMT"}, 
        {symbol : "PRIF-A"}, 
        {symbol : "DSM"}, 
        {symbol : "LALT"}, 
        {symbol : "FRT"}, 
        {symbol : "PPIH"}, 
        {symbol : "PSTL"}, 
        {symbol : "EPR"}, 
        {symbol : "PCAR"}, 
        {symbol : "SFUN"}, 
        {symbol : "CWAY"}, 
        {symbol : "ARDC"}, 
        {symbol : "MVF"}, 
        {symbol : "ENV"}, 
        {symbol : "GGM"}, 
        {symbol : "BHF"}, 
        {symbol : "BOFI"}, 
        {symbol : "ACRE"}, 
        {symbol : "ESP"}, 
        {symbol : "AZRX"}, 
        {symbol : "KORS"}, 
        {symbol : "EXT"}, 
        {symbol : "CNACU"}, 
        {symbol : "AUDC"}, 
        {symbol : "CTX*"}, 
        {symbol : "UNM"}, 
        {symbol : "SGDM"}, 
        {symbol : "STM"}, 
        {symbol : "CRI"}, 
        {symbol : "ULVM"}, 
        {symbol : "MLPG"}, 
        {symbol : "QDIV"}, 
        {symbol : "VERI"}, 
        {symbol : "CXDC"}, 
        {symbol : "DRD"}, 
        {symbol : "BHR-B"}, 
        {symbol : "SLF"}, 
        {symbol : "CIG"}, 
        {symbol : "XON"}, 
        {symbol : "USOU"}, 
        {symbol : "F"}, 
        {symbol : "NLY-F"}, 
        {symbol : "VLUE"}, 
        {symbol : "EWV"}, 
        {symbol : "TERM"}, 
        {symbol : "EVK"}, 
        {symbol : "UPWK"}, 
        {symbol : "MGYR"}, 
        {symbol : "CETX"}, 
        {symbol : "PINS"}, 
        {symbol : "WDAY"}, 
        {symbol : "SAMA"}, 
        {symbol : "TDJ"}, 
        {symbol : "CTRP"}, 
        {symbol : "DDD"}, 
        {symbol : "XLF"}, 
        {symbol : "NBO"}, 
        {symbol : "CVA"}, 
        {symbol : "ENBA"}, 
        {symbol : "VMOT"}, 
        {symbol : "KONE"}, 
        {symbol : "CRSA"}, 
        {symbol : "CEI"}, 
        {symbol : "CVI"}, 
        {symbol : "CPRX"}, 
        {symbol : "UGLD"}, 
        {symbol : "EVRI"}, 
        {symbol : "MTC"}, 
        {symbol : "TLC"}, 
        {symbol : "SRUNU"}, 
        {symbol : "LIVE"}, 
        {symbol : "NM-H"}, 
        {symbol : "NTCT"}, 
        {symbol : "BSCO"}, 
        {symbol : "DDWM"}, 
        {symbol : "LBRDK"}, 
        {symbol : "CNOB"}, 
        {symbol : "PAF"}, 
        {symbol : "SJR"}, 
        {symbol : "CS"}, 
        {symbol : "DJCI"}, 
        {symbol : "CCI-A"}, 
        {symbol : "EWT"}, 
        {symbol : "ASV"}, 
        {symbol : "CORI"}, 
        {symbol : "CHGX"}, 
        {symbol : "ARRY"}, 
        {symbol : "HDGE"}, 
        {symbol : "HHHH"}, 
        {symbol : "SOLOW"}, 
        {symbol : "FDEF"}, 
        {symbol : "MOSY"}, 
        {symbol : "C+A"}, 
        {symbol : "BSCJ"}, 
        {symbol : "TCCA*"}, 
        {symbol : "DXPE"}, 
        {symbol : "TLND"}, 
        {symbol : "IGI"}, 
        {symbol : "FARM"}, 
        {symbol : "HACW"}, 
        {symbol : "JHG"}, 
        {symbol : "PNRL"}, 
        {symbol : "AXTA"}, 
        {symbol : "KALU"}, 
        {symbol : "CHDN"}, 
        {symbol : "SBBX"}, 
        {symbol : "AIQ"}, 
        {symbol : "RDNT"}, 
        {symbol : "DTK"}, 
        {symbol : "TZACW"}, 
        {symbol : "ITUB"}, 
        {symbol : "BFOR"}, 
        {symbol : "PRPO"}, 
        {symbol : "BDJ"}, 
        {symbol : "MTB-"}, 
        {symbol : "PNRG"}, 
        {symbol : "ACU"}, 
        {symbol : "QQQC"}, 
        {symbol : "BRG-D"}, 
        {symbol : "DEPO"}, 
        {symbol : "AGNCN"}, 
        {symbol : "AIB*"}, 
        {symbol : "RARX"}, 
        {symbol : "RBNC"}, 
        {symbol : "HAIR"}, 
        {symbol : "AADR"}, 
        {symbol : "JKHY"}, 
        {symbol : "NI-B"}, 
        {symbol : "RUTH"}, 
        {symbol : "CEE"}, 
        {symbol : "HES"}, 
        {symbol : "PTI"}, 
        {symbol : "KW"}, 
        {symbol : "DFND"}, 
        {symbol : "PYN"}, 
        {symbol : "TTNP"}, 
        {symbol : "BROGW"}, 
        {symbol : "ALAC"}, 
        {symbol : "MS-A"}, 
        {symbol : "GALE"}, 
        {symbol : "EMO"}, 
        {symbol : "AHGP"}, 
        {symbol : "YORW"}, 
        {symbol : "NEE-Q"}, 
        {symbol : "DXTR"}, 
        {symbol : "ETON"}, 
        {symbol : "GATX"}, 
        {symbol : "GNFT"}, 
        {symbol : "QURE"}, 
        {symbol : "ALPN"}, 
        {symbol : "GOOGL"}, 
        {symbol : "INOD"}, 
        {symbol : "LEN"}, 
        {symbol : "OIIM"}, 
        {symbol : "LMRKO"}, 
        {symbol : "QABA"}, 
        {symbol : "ICB"}, 
        {symbol : "TWO-C"}, 
        {symbol : "HUSV"}, 
        {symbol : "AES"}, 
        {symbol : "ACMR"}, 
        {symbol : "CTBB"}, 
        {symbol : "OTLKW"}, 
        {symbol : "BE"}, 
        {symbol : "AWF"}, 
        {symbol : "SPTM"}, 
        {symbol : "JDD"}, 
        {symbol : "MRSN"}, 
        {symbol : "DVY"}, 
        {symbol : "WMK"}, 
        {symbol : "FINZ"}, 
        {symbol : "DHR-A"}, 
        {symbol : "ELY"}, 
        {symbol : "VNM"}, 
        {symbol : "BKI"}, 
        {symbol : "FRA"}, 
        {symbol : "AQNA"}, 
        {symbol : "GSIT"}, 
        {symbol : "SSBI"}, 
        {symbol : "KNOW"}, 
        {symbol : "WTW"}, 
        {symbol : "VISI"}, 
        {symbol : "DNJR"}, 
        {symbol : "SPR"}, 
        {symbol : "JHMD"}, 
        {symbol : "PBA"}, 
        {symbol : "SSO"}, 
        {symbol : "DFS"}, 
        {symbol : "TIG"}, 
        {symbol : "WPRT"}, 
        {symbol : "RVP"}, 
        {symbol : "LBC"}, 
        {symbol : "THD"}, 
        {symbol : "EQ"}, 
        {symbol : "IPO"}, 
        {symbol : "CJ"}, 
        {symbol : "OPER"}, 
        {symbol : "SYKE"}, 
        {symbol : "IDEV"}, 
        {symbol : "GAA"}, 
        {symbol : "WKHS"}, 
        {symbol : "HMTV"}, 
        {symbol : "SPDV"}, 
        {symbol : "SPSC"}, 
        {symbol : "ATAX"}, 
        {symbol : "LOPE"}, 
        {symbol : "XGTIW"}, 
        {symbol : "AVDL"}, 
        {symbol : "EXFO"}, 
        {symbol : "CVG"}, 
        {symbol : "FDC"}, 
        {symbol : "WELL"}, 
        {symbol : "CALL"}, 
        {symbol : "FNDB"}, 
        {symbol : "STAR-D"}, 
        {symbol : "UGI"}, 
        {symbol : "ARES"}, 
        {symbol : "XBI"}, 
        {symbol : "PGJ"}, 
        {symbol : "NRE"}, 
        {symbol : "FXA"}, 
        {symbol : "EVER"}, 
        {symbol : "EVF"}, 
        {symbol : "VHI"}, 
        {symbol : "PRSP#"}, 
        {symbol : "QD"}, 
        {symbol : "EPI"}, 
        {symbol : "LNTH"}, 
        {symbol : "MYY"}, 
        {symbol : "NLSN"}, 
        {symbol : "TPH"}, 
        {symbol : "SPXB"}, 
        {symbol : "WFC-V"}, 
        {symbol : "DTK*"}, 
        {symbol : "GECCM"}, 
        {symbol : "SCACU"}, 
        {symbol : "LRGE"}, 
        {symbol : "AABA"}, 
        {symbol : "KR"}, 
        {symbol : "MDRX"}, 
        {symbol : "CCBG"}, 
        {symbol : "AOS"}, 
        {symbol : "FNDC"}, 
        {symbol : "IOVA"}, 
        {symbol : "EDZ"}, 
        {symbol : "PTIE"}, 
        {symbol : "ESS"}, 
        {symbol : "AXON"}, 
        {symbol : "NOM"}, 
        {symbol : "STT-E"}, 
        {symbol : "NYMTN"}, 
        {symbol : "XL"}, 
        {symbol : "FPE"}, 
        {symbol : "HGT"}, 
        {symbol : "AGNC"}, 
        {symbol : "RGI"}, 
        {symbol : "BTE"}, 
        {symbol : "HURC"}, 
        {symbol : "AVHI"}, 
        {symbol : "GWL"}, 
        {symbol : "EAGLW"}, 
        {symbol : "TEO"}, 
        {symbol : "BFK"}, 
        {symbol : "IRDMB"}, 
        {symbol : "MFNC"}, 
        {symbol : "UHAL"}, 
        {symbol : "EVOL"}, 
        {symbol : "DIVY"}, 
        {symbol : "GSEW"}, 
        {symbol : "JHEM"}, 
        {symbol : "TDW"}, 
        {symbol : "REDU"}, 
        {symbol : "SBNA"}, 
        {symbol : "SHPG"}, 
        {symbol : "EAD"}, 
        {symbol : "KERX"}, 
        {symbol : "ESML"}, 
        {symbol : "C-C"}, 
        {symbol : "CMFN"}, 
        {symbol : "SMMU"}, 
        {symbol : "BHV"}, 
        {symbol : "SGY+"}, 
        {symbol : "CHT"}, 
        {symbol : "ATLC"}, 
        {symbol : "SONO"}, 
        {symbol : "TEI"}, 
        {symbol : "CHKR"}, 
        {symbol : "OMAD+"}, 
        {symbol : "SYLD"}, 
        {symbol : "IAK"}, 
        {symbol : "BPT"}, 
        {symbol : "ROST"}, 
        {symbol : "ZIV"}, 
        {symbol : "PKD"}, 
        {symbol : "LAZY"}, 
        {symbol : "BSCR"}, 
        {symbol : "BIDU"}, 
        {symbol : "BRACU"}, 
        {symbol : "SFBS"}, 
        {symbol : "AGCO"}, 
        {symbol : "CFBK"}, 
        {symbol : "FRBA"}, 
        {symbol : "CMCL"}, 
        {symbol : "CLPS"}, 
        {symbol : "STNG"}, 
        {symbol : "ALGT"}, 
        {symbol : "CXRX"}, 
        {symbol : "INCO"}, 
        {symbol : "FMAO"}, 
        {symbol : "STXB"}, 
        {symbol : "CAI-A"}, 
        {symbol : "WTI"}, 
        {symbol : "NEWM"}, 
        {symbol : "EXR"}, 
        {symbol : "PWB"}, 
        {symbol : "UEIC"}, 
        {symbol : "CRT"}, 
        {symbol : "VEC"}, 
        {symbol : "WBK"}, 
        {symbol : "BAC+A"}, 
        {symbol : "APRI"}, 
        {symbol : "SFB"}, 
        {symbol : "AIMC"}, 
        {symbol : "SLTB"}, 
        {symbol : "SNDR"}, 
        {symbol : "SGF"}, 
        {symbol : "OXSQZ"}, 
        {symbol : "LDP"}, 
        {symbol : "GLU-A"}, 
        {symbol : "EHTH"}, 
        {symbol : "FIEE"}, 
        {symbol : "SOXL"}, 
        {symbol : "SPY"}, 
        {symbol : "VTSI"}, 
        {symbol : "EQRR"}, 
        {symbol : "LMRKP"}, 
        {symbol : "KMPH"}, 
        {symbol : "HEWC"}, 
        {symbol : "BBX"}, 
        {symbol : "EQWL"}, 
        {symbol : "GDG"}, 
        {symbol : "BLV"}, 
        {symbol : "BY"}, 
        {symbol : "NNN-E"}, 
        {symbol : "EGOV"}, 
        {symbol : "EVRG"}, 
        {symbol : "ARDX"}, 
        {symbol : "ORCL"}, 
        {symbol : "RMG"}, 
        {symbol : "PSN"}, 
        {symbol : "RF-A"}, 
        {symbol : "SMED"}, 
        {symbol : "FDP"}, 
        {symbol : "SMLV"}, 
        {symbol : "ORIG"}, 
        {symbol : "DE"}, 
        {symbol : "FLAX"}, 
        {symbol : "ACY"}, 
        {symbol : "DGRO"}, 
        {symbol : "FFC"}, 
        {symbol : "CARS"}, 
        {symbol : "NVUS"}, 
        {symbol : "OSPRU"}, 
        {symbol : "SYRS"}, 
        {symbol : "DHX"}, 
        {symbol : "KBLM"}, 
        {symbol : "LIND"}, 
        {symbol : "IAF"}, 
        {symbol : "TOWR"}, 
        {symbol : "WEAT"}, 
        {symbol : "SHYL"}, 
        {symbol : "EFC"}, 
        {symbol : "PXMG"}, 
        {symbol : "HAP"}, 
        {symbol : "TFI"}, 
        {symbol : "HFXI"}, 
        {symbol : "FRC-G"}, 
        {symbol : "FBNC"}, 
        {symbol : "WING"}, 
        {symbol : "CYS-B"}, 
        {symbol : "HIPS"}, 
        {symbol : "ADNT"}, 
        {symbol : "PMR"}, 
        {symbol : "AEGN"}, 
        {symbol : "WBB"}, 
        {symbol : "MP-D*"}, 
        {symbol : "TBRGU"}, 
        {symbol : "DFBHW"}, 
        {symbol : "SOLO"}, 
        {symbol : "FTLS"}, 
        {symbol : "MGA"}, 
        {symbol : "TBLU"}, 
        {symbol : "ITEQ"}, 
        {symbol : "CCNI"}, 
        {symbol : "PSA-F"}, 
        {symbol : "BMRC"}, 
        {symbol : "PRTK"}, 
        {symbol : "BKS"}, 
        {symbol : "TBRGW"}, 
        {symbol : "SMRT"}, 
        {symbol : "TDAC"}, 
        {symbol : "GSK"}, 
        {symbol : "GH"}, 
        {symbol : "SSLJ"}, 
      ]);
    });
};


