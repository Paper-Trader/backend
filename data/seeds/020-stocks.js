
exports.seed = function(knex) {
  return knex('stocks')
    .then(function () {
      return knex('stocks').insert([
        {symbol : "GPK"}, 
        {symbol : "FTACW"}, 
        {symbol : "CORT"}, 
        {symbol : "MTCH"}, 
        {symbol : "TTFS"}, 
        {symbol : "TRST"}, 
        {symbol : "TH"}, 
        {symbol : "TTEC"}, 
        {symbol : "BXMX"}, 
        {symbol : "SVMK"}, 
        {symbol : "AVD"}, 
        {symbol : "KOIN"}, 
        {symbol : "MAC"}, 
        {symbol : "YGE"}, 
        {symbol : "PBPB"}, 
        {symbol : "BGNE"}, 
        {symbol : "PRSP"}, 
        {symbol : "IGD"}, 
        {symbol : "TANNI"}, 
        {symbol : "RDN"}, 
        {symbol : "EDTXW"}, 
        {symbol : "GCH"}, 
        {symbol : "DDG"}, 
        {symbol : "THW"}, 
        {symbol : "WP"}, 
        {symbol : "DTEA"}, 
        {symbol : "ATHM"}, 
        {symbol : "CMCT"}, 
        {symbol : "WCC"}, 
        {symbol : "STPP"}, 
        {symbol : "ENTXW"}, 
        {symbol : "GSHD"}, 
        {symbol : "ORMP"}, 
        {symbol : "ENFC"}, 
        {symbol : "AAMC"}, 
        {symbol : "RGS"}, 
        {symbol : "ZIXI"}, 
        {symbol : "CHS"}, 
        {symbol : "NCA"}, 
        {symbol : "NMM"}, 
        {symbol : "USCI"}, 
        {symbol : "KEY-J"}, 
        {symbol : "NOVN"}, 
        {symbol : "ALDX"}, 
        {symbol : "ACN"}, 
        {symbol : "SLRC"}, 
        {symbol : "WBIG"}, 
        {symbol : "HIW"}, 
        {symbol : "WPZ"}, 
        {symbol : "CLWT"}, 
        {symbol : "SMMV"}, 
        {symbol : "XKFS"}, 
        {symbol : "CLRG"}, 
        {symbol : "SDI"}, 
        {symbol : "HSEB"}, 
        {symbol : "AB"}, 
        {symbol : "PLM"}, 
        {symbol : "ALL-C"}, 
        {symbol : "EACQ"}, 
        {symbol : "OAK-A"}, 
        {symbol : "OFC"}, 
        {symbol : "VNET"}, 
        {symbol : "MRTN"}, 
        {symbol : "COHU"}, 
        {symbol : "INFO"}, 
        {symbol : "TLTE"}, 
        {symbol : "AIPT"}, 
        {symbol : "NNVC"}, 
        {symbol : "BDXA"}, 
        {symbol : "BEF"}, 
        {symbol : "CRVS"}, 
        {symbol : "BSA"}, 
        {symbol : "ALSK"}, 
        {symbol : "IPOA"}, 
        {symbol : "FMDG"}, 
        {symbol : "VALQ"}, 
        {symbol : "TSLX"}, 
        {symbol : "VTC"}, 
        {symbol : "RCII"}, 
        {symbol : "KAMN"}, 
        {symbol : "NEV"}, 
        {symbol : "LLQD"}, 
        {symbol : "NWHM"}, 
        {symbol : "RGSE"}, 
        {symbol : "BOJA"}, 
        {symbol : "SIRI"}, 
        {symbol : "JPMF"}, 
        {symbol : "CBD"}, 
        {symbol : "XENE"}, 
        {symbol : "AQB"}, 
        {symbol : "REG"}, 
        {symbol : "FTSV"}, 
        {symbol : "CTHR"}, 
        {symbol : "QVCA"}, 
        {symbol : "WBIY"}, 
        {symbol : "USB"}, 
        {symbol : "PSB-V"}, 
        {symbol : "FBR"}, 
        {symbol : "COE"}, 
        {symbol : "AEY"}, 
        {symbol : "WSC"}, 
        {symbol : "KTOV"}, 
        {symbol : "AMCIU"}, 
        {symbol : "NXTM"}, 
        {symbol : "MNSB"}, 
        {symbol : "TAK"}, 
        {symbol : "IFV"}, 
        {symbol : "CNMD"}, 
        {symbol : "CVLT"}, 
        {symbol : "IWY"}, 
        {symbol : "NTLA"}, 
        {symbol : "HYLB"}, 
        {symbol : "AROW"}, 
        {symbol : "GEK*"}, 
        {symbol : "WATT"}, 
        {symbol : "AGMH"}, 
        {symbol : "PSCE"}, 
        {symbol : "ZION"}, 
        {symbol : "EEA"}, 
        {symbol : "UTI"}, 
        {symbol : "AMJ"}, 
        {symbol : "DSE"}, 
        {symbol : "ASA"}, 
        {symbol : "UNAM"}, 
        {symbol : "KODK+"}, 
        {symbol : "OCIO"}, 
        {symbol : "CBI"}, 
        {symbol : "SGBX"}, 
        {symbol : "IAI"}, 
        {symbol : "SPA"}, 
        {symbol : "SB"}, 
        {symbol : "WFC-T"}, 
        {symbol : "FFIV"}, 
        {symbol : "BPTH"}, 
        {symbol : "MMTM"}, 
        {symbol : "QQQ"}, 
        {symbol : "TAIL"}, 
        {symbol : "TCP"}, 
        {symbol : "CNET"}, 
        {symbol : "O"}, 
        {symbol : "QINT"}, 
        {symbol : "GDL"}, 
        {symbol : "WHFBL"}, 
        {symbol : "SWAN"}, 
        {symbol : "SBLK"}, 
        {symbol : "ONCE"}, 
        {symbol : "PGX"}, 
        {symbol : "MOR"}, 
        {symbol : "CNDF"}, 
        {symbol : "GLPG"}, 
        {symbol : "CVETV"}, 
        {symbol : "JILL"}, 
        {symbol : "HCAC+"}, 
        {symbol : "IFEU"}, 
        {symbol : "LECO"}, 
        {symbol : "IYZ"}, 
        {symbol : "FLXN"}, 
        {symbol : "TMCXU"}, 
        {symbol : "AGR"}, 
        {symbol : "HOG"}, 
        {symbol : "VZA*"}, 
        {symbol : "FIBR"}, 
        {symbol : "TCF"}, 
        {symbol : "TDE"}, 
        {symbol : "NKTR"}, 
        {symbol : "CBU"}, 
        {symbol : "IBCD"}, 
        {symbol : "UMBF"}, 
        {symbol : "BBK"}, 
        {symbol : "HBCP"}, 
        {symbol : "WFC-Q"}, 
        {symbol : "HSBC"}, 
        {symbol : "CPER"}, 
        {symbol : "DSXN"}, 
        {symbol : "VAMO"}, 
        {symbol : "USATP"}, 
        {symbol : "TGP"}, 
        {symbol : "JPC"}, 
        {symbol : "SKIS"}, 
        {symbol : "TDC"}, 
        {symbol : "AC"}, 
        {symbol : "VIAV"}, 
        {symbol : "IGHG"}, 
        {symbol : "KNX"}, 
        {symbol : "IBDQ"}, 
        {symbol : "RCP"}, 
        {symbol : "QBAK"}, 
        {symbol : "CDOR"}, 
        {symbol : "EUDV"}, 
        {symbol : "ECC"}, 
        {symbol : "PCEF"}, 
        {symbol : "GGN-B"}, 
        {symbol : "AET"}, 
        {symbol : "FLQD"}, 
        {symbol : "EFR"}, 
        {symbol : "LEU"}, 
        {symbol : "FLC"}, 
        {symbol : "NXPI"}, 
        {symbol : "SALM"}, 
        {symbol : "NORD"}, 
        {symbol : "QDEL"}, 
        {symbol : "CMSA"}, 
        {symbol : "BTAI"}, 
        {symbol : "EGN"}, 
        {symbol : "REXX"}, 
        {symbol : "NS-B"}, 
        {symbol : "CVGW"}, 
        {symbol : "REZI#"}, 
        {symbol : "TZAC"}, 
        {symbol : "DUST"}, 
        {symbol : "NTAP"}, 
        {symbol : "BOIL"}, 
        {symbol : "VLGEA"}, 
        {symbol : "USB-O"}, 
        {symbol : "TECK"}, 
        {symbol : "OXSQ"}, 
        {symbol : "LTRPB"}, 
        {symbol : "DPK"}, 
        {symbol : "SNMP"}, 
        {symbol : "EGRX"}, 
        {symbol : "OCX"}, 
        {symbol : "ZFGN"}, 
        {symbol : "CBL"}, 
        {symbol : "DWMF"}, 
        {symbol : "MQY"}, 
        {symbol : "PUK-"}, 
        {symbol : "VCF"}, 
        {symbol : "SYK"}, 
        {symbol : "HBAN"}, 
        {symbol : "HOFT"}, 
        {symbol : "IIM"}, 
        {symbol : "EQC"}, 
        {symbol : "VEA"}, 
        {symbol : "IP"}, 
        {symbol : "EMDV"}, 
        {symbol : "MPAC"}, 
        {symbol : "RTW"}, 
        {symbol : "PB"}, 
        {symbol : "WPS"}, 
        {symbol : "ESGF"}, 
        {symbol : "ADXSW"}, 
        {symbol : "RUSS"}, 
        {symbol : "ESTC"}, 
        {symbol : "AIY"}, 
        {symbol : "VBFC"}, 
        {symbol : "PSA-E"}, 
        {symbol : "NWS"}, 
        {symbol : "ZEAL"}, 
        {symbol : "BLD"}, 
        {symbol : "KALA"}, 
        {symbol : "PIR"}, 
        {symbol : "SCHN"}, 
        {symbol : "ONP"}, 
        {symbol : "INF"}, 
        {symbol : "NCR"}, 
        {symbol : "MUDSU"}, 
        {symbol : "JCTCF"}, 
        {symbol : "MNCLW"}, 
        {symbol : "ABEOW"}, 
        {symbol : "RWSL"}, 
        {symbol : "IBOC"}, 
        {symbol : "PCTY"}, 
        {symbol : "SDRL"}, 
        {symbol : "CMF"}, 
        {symbol : "STC"}, 
        {symbol : "GST"}, 
        {symbol : "RLY"}, 
        {symbol : "IWF"}, 
        {symbol : "KMI-A"}, 
        {symbol : "DIT"}, 
        {symbol : "SPRO"}, 
        {symbol : "VVI"}, 
        {symbol : "PSCT"}, 
        {symbol : "EXPI"}, 
        {symbol : "STWD"}, 
        {symbol : "ILF"}, 
        {symbol : "SNH"}, 
        {symbol : "TGH"}, 
        {symbol : "IAE"}, 
        {symbol : "ONTXW"}, 
        {symbol : "OASI"}, 
        {symbol : "PGAL"}, 
        {symbol : "CRC"}, 
        {symbol : "RWJ"}, 
        {symbol : "FEMB"}, 
        {symbol : "TAXF"}, 
        {symbol : "EDAP"}, 
        {symbol : "IUSG"}, 
        {symbol : "QTRH"}, 
        {symbol : "HFBC"}, 
        {symbol : "ICCC"}, 
        {symbol : "DGL"}, 
        {symbol : "PRIM"}, 
        {symbol : "LTN+"}, 
        {symbol : "HOPE"}, 
        {symbol : "ATTO"}, 
        {symbol : "SRET"}, 
        {symbol : "FALN"}, 
        {symbol : "EZPW"}, 
        {symbol : "MLAB"}, 
        {symbol : "AVLR"}, 
        {symbol : "AST"}, 
        {symbol : "OCLR"}, 
        {symbol : "ISRL"}, 
        {symbol : "GTYHW"}, 
        {symbol : "LINDW"}, 
        {symbol : "RTH"}, 
        {symbol : "ETFC"}, 
        {symbol : "NAZ"}, 
        {symbol : "BNSO"}, 
        {symbol : "PRU"}, 
        {symbol : "VTIQU"}, 
        {symbol : "VRP"}, 
        {symbol : "SNGX"}, 
        {symbol : "MFG"}, 
        {symbol : "BIO"}, 
        {symbol : "HHHHU"}, 
        {symbol : "PSA-D"}, 
        {symbol : "BLFS"}, 
        {symbol : "GNC"}, 
        {symbol : "ROAM"}, 
        {symbol : "KEP"}, 
        {symbol : "PVTL"}, 
        {symbol : "SKF"}, 
        {symbol : "DOTAW"}, 
        {symbol : "LQDA"}, 
        {symbol : "CBS"}, 
        {symbol : "WW"}, 
        {symbol : "BXP-B"}, 
        {symbol : "MDR"}, 
        {symbol : "XPLR"}, 
        {symbol : "SPWR"}, 
        {symbol : "SLNOW"}, 
        {symbol : "EPS"}, 
        {symbol : "LE"}, 
        {symbol : "MUDSW"}, 
        {symbol : "EWMC"}, 
        {symbol : "CSSE"}, 
        {symbol : "SSNC"}, 
        {symbol : "SPN"}, 
        {symbol : "FMF"}, 
        {symbol : "BBRG"}, 
        {symbol : "NLY-D"}, 
        {symbol : "CADE"}, 
        {symbol : "EE"}, 
        {symbol : "SAVA"}, 
        {symbol : "MLSS"}, 
        {symbol : "FLBR"}, 
        {symbol : "ABUS"}, 
        {symbol : "SVRA"}, 
        {symbol : "MYCC"}, 
        {symbol : "SRT"}, 
        {symbol : "BOMN"}, 
        {symbol : "GNRC"}, 
        {symbol : "ESPO"}, 
        {symbol : "MBNAA"}, 
        {symbol : "NYMTO"}, 
        {symbol : "UFPI"}, 
        {symbol : "ATEN"}, 
        {symbol : "FGEN"}, 
        {symbol : "JPM-D*"}, 
        {symbol : "IBD"}, 
        {symbol : "STNL"}, 
        {symbol : "LCNB"}, 
        {symbol : "VR"}, 
        {symbol : "MFA"}, 
        {symbol : "BTG"}, 
        {symbol : "GIGA"}, 
        {symbol : "FQAL"}, 
        {symbol : "BSX"}, 
        {symbol : "MOSC"}, 
        {symbol : "CPRI"}, 
        {symbol : "SEMG"}, 
        {symbol : "DLPNW"}, 
        {symbol : "JPEM"}, 
        {symbol : "PSF"}, 
        {symbol : "SSPY"}, 
        {symbol : "CCXI"}, 
        {symbol : "SPHD"}, 
        {symbol : "QEP"}, 
        {symbol : "FXU"}, 
        {symbol : "VPL"}, 
        {symbol : "RNEM"}, 
        {symbol : "SLM"}, 
        {symbol : "VGZ"}, 
        {symbol : "EBAYL"}, 
        {symbol : "CATY"}, 
        {symbol : "MFC"}, 
        {symbol : "SCG"}, 
        {symbol : "CVGI"}, 
        {symbol : "VV"}, 
        {symbol : "RVNU"}, 
        {symbol : "AMC"}, 
        {symbol : "CCT"}, 
        {symbol : "SYG"}, 
        {symbol : "WSO.B"}, 
        {symbol : "BSJK"}, 
        {symbol : "WFC-L"}, 
        {symbol : "LBJ"}, 
        {symbol : "LCI"}, 
        {symbol : "HLI"}, 
        {symbol : "RBA"}, 
        {symbol : "ACTTU"}, 
        {symbol : "OAK-B"}, 
        {symbol : "WLH"}, 
        {symbol : "CLF"}, 
        {symbol : "VIIX"}, 
        {symbol : "PZD"}, 
        {symbol : "FDX"}, 
        {symbol : "QQQX"}, 
        {symbol : "IBKC"}, 
        {symbol : "PRAA"}, 
        {symbol : "TEF"}, 
        {symbol : "GHSI"}, 
        {symbol : "WEC"}, 
        {symbol : "TNK"}, 
        {symbol : "PZC"}, 
        {symbol : "UTRN"}, 
        {symbol : "HYG"}, 
        {symbol : "GRTS"}, 
        {symbol : "ICD"}, 
        {symbol : "YRD"}, 
        {symbol : "MUDS"}, 
        {symbol : "GLP-A"}, 
        {symbol : "KRC"}, 
        {symbol : "DNBF"}, 
        {symbol : "Y"}, 
        {symbol : "JSYNU"}, 
        {symbol : "JBSS"}, 
        {symbol : "BWFG"}, 
        {symbol : "SHYD"}, 
        {symbol : "BBT-H"}, 
        {symbol : "FRAC"}, 
        {symbol : "ONEY"}, 
        {symbol : "WYN"}, 
        {symbol : "VRRMW"}, 
        {symbol : "URA"}, 
        {symbol : "DVN"}, 
        {symbol : "TPIC"}, 
        {symbol : "DRIOW"}, 
        {symbol : "NGHCO"}, 
        {symbol : "B"}, 
        {symbol : "BRFS"}, 
        {symbol : "PAGP"}, 
        {symbol : "PRIF-C"}, 
        {symbol : "TECL"}, 
        {symbol : "ZBRA"}, 
        {symbol : "DLA"}, 
        {symbol : "HCA"}, 
        {symbol : "GAINO"}, 
        {symbol : "PZN"}, 
        {symbol : "OFSSZ"}, 
        {symbol : "NHI"}, 
        {symbol : "MIDZ"}, 
        {symbol : "ECPG"}, 
        {symbol : "ESL"}, 
        {symbol : "ANTH"}, 
        {symbol : "HSCZ"}, 
        {symbol : "FBT"}, 
        {symbol : "COO"}, 
        {symbol : "WPG-H"}, 
        {symbol : "ROAD"}, 
        {symbol : "UST"}, 
        {symbol : "NX"}, 
        {symbol : "ORPN"}, 
        {symbol : "TSN"}, 
        {symbol : "VCIT"}, 
        {symbol : "ZOES"}, 
        {symbol : "VRTX"}, 
        {symbol : "APO-B"}, 
        {symbol : "UMH"}, 
        {symbol : "TWN"}, 
        {symbol : "CBM"}, 
        {symbol : "NATH"}, 
        {symbol : "FLR"}, 
        {symbol : "HCXY"}, 
        {symbol : "CNR"}, 
        {symbol : "VIXY"}, 
        {symbol : "ELTK"}, 
        {symbol : "VNTR"}, 
        {symbol : "CELP"}, 
        {symbol : "PAI"}, 
        {symbol : "ROSEU"}, 
        {symbol : "QTEC"}, 
        {symbol : "PFBC"}, 
        {symbol : "GRAF="}, 
        {symbol : "UHN"}, 
        {symbol : "NIB"}, 
        {symbol : "FISV"}, 
        {symbol : "XAN-C"}, 
        {symbol : "QINC"}, 
        {symbol : "CLNS-H"}, 
        {symbol : "OPB"}, 
        {symbol : "ARLO"}, 
        {symbol : "AFMD"}, 
        {symbol : "WINA"}, 
        {symbol : "SOFO"}, 
        {symbol : "FLRN"}, 
        {symbol : "LQD"}, 
        {symbol : "ENB"}, 
      ]);
    });
};


