
exports.seed = function(knex) {
  return knex('stocks')
    .then(function () {
      return knex('stocks').insert([
        {symbol : "SOLY"}, 
        {symbol : "MRNS"}, 
        {symbol : "VRRM"}, 
        {symbol : "FDTS"}, 
        {symbol : "ASX#"}, 
        {symbol : "BNDC"}, 
        {symbol : "TCCB*"}, 
        {symbol : "MPC"}, 
        {symbol : "OCN"}, 
        {symbol : "PVT"}, 
        {symbol : "BSIG"}, 
        {symbol : "DSUM"}, 
        {symbol : "YMLP"}, 
        {symbol : "CEFS"}, 
        {symbol : "REXR-A"}, 
        {symbol : "RY"}, 
        {symbol : "FLY"}, 
        {symbol : "SRI"}, 
        {symbol : "JTD"}, 
        {symbol : "STAA"}, 
        {symbol : "NCS"}, 
        {symbol : "C-L"}, 
        {symbol : "TCRW"}, 
        {symbol : "SRLP"}, 
        {symbol : "LANDP"}, 
        {symbol : "VALE"}, 
        {symbol : "RJF"}, 
        {symbol : "BZQ"}, 
        {symbol : "ANDE"}, 
        {symbol : "PCH"}, 
        {symbol : "TBLTW"}, 
        {symbol : "CGBD"}, 
        {symbol : "EGF"}, 
        {symbol : "DMPI"}, 
        {symbol : "PWS"}, 
        {symbol : "MXF"}, 
        {symbol : "FLN"}, 
        {symbol : "IPHI"}, 
        {symbol : "IMMY"}, 
        {symbol : "DWTR"}, 
        {symbol : "EDC"}, 
        {symbol : "EDTX"}, 
        {symbol : "EMAG"}, 
        {symbol : "MMV"}, 
        {symbol : "SPLP-T"}, 
        {symbol : "WFT"}, 
        {symbol : "AMZA"}, 
        {symbol : "RDVY"}, 
        {symbol : "BF.A"}, 
        {symbol : "JHSC"}, 
        {symbol : "VG"}, 
        {symbol : "NRC"}, 
        {symbol : "VRTS"}, 
        {symbol : "MKGI"}, 
        {symbol : "CHCI"}, 
        {symbol : "MPWR"}, 
        {symbol : "TDY"}, 
        {symbol : "LTEA"}, 
        {symbol : "MRT"}, 
        {symbol : "ROLL"}, 
        {symbol : "TNC"}, 
        {symbol : "LOACU"}, 
        {symbol : "VJET"}, 
        {symbol : "ACSF"}, 
        {symbol : "MVT"}, 
        {symbol : "FBC"}, 
        {symbol : "ESTE"}, 
        {symbol : "MLM"}, 
        {symbol : "EPSN"}, 
        {symbol : "BRPM="}, 
        {symbol : "AMSC"}, 
        {symbol : "PXE"}, 
        {symbol : "SG"}, 
        {symbol : "NBHC"}, 
        {symbol : "MLPQ"}, 
        {symbol : "DORM"}, 
        {symbol : "ALL-B"}, 
        {symbol : "GAB^"}, 
        {symbol : "GPIAW"}, 
        {symbol : "UJPY"}, 
        {symbol : "SGA"}, 
        {symbol : "OLO"}, 
        {symbol : "ABDC"}, 
        {symbol : "BCE"}, 
        {symbol : "CDXS"}, 
        {symbol : "GBUY"}, 
        {symbol : "GLACU"}, 
        {symbol : "FUEL"}, 
        {symbol : "ARCO"}, 
        {symbol : "CYRXW"}, 
        {symbol : "ARNC-B"}, 
        {symbol : "HOOK"}, 
        {symbol : "LJPC"}, 
        {symbol : "IIGD"}, 
        {symbol : "FSIC"}, 
        {symbol : "DDLS"}, 
        {symbol : "RLGT"}, 
        {symbol : "TVC"}, 
        {symbol : "XMX"}, 
        {symbol : "FLIR"}, 
        {symbol : "CSPI"}, 
        {symbol : "UBS"}, 
        {symbol : "DGT"}, 
        {symbol : "EQH"}, 
        {symbol : "DTQ"}, 
        {symbol : "AEL"}, 
        {symbol : "BCRH"}, 
        {symbol : "AGM-C"}, 
        {symbol : "PLG"}, 
        {symbol : "ROSG"}, 
        {symbol : "PESI"}, 
        {symbol : "JHMF"}, 
        {symbol : "XBKS"}, 
        {symbol : "FSFR"}, 
        {symbol : "SVM"}, 
        {symbol : "GXGXU"}, 
        {symbol : "HTBI"}, 
        {symbol : "JPXN"}, 
        {symbol : "BWX"}, 
        {symbol : "WMIH"}, 
        {symbol : "FEI"}, 
        {symbol : "IEUR"}, 
        {symbol : "GVP"}, 
        {symbol : "DBS"}, 
        {symbol : "TRI"}, 
        {symbol : "LEMB"}, 
        {symbol : "BTZ"}, 
        {symbol : "BPR"}, 
        {symbol : "HRZN"}, 
        {symbol : "XSLV"}, 
        {symbol : "NEE-G*"}, 
        {symbol : "GIGB"}, 
        {symbol : "PSB-X"}, 
        {symbol : "PNI"}, 
        {symbol : "SIFY"}, 
        {symbol : "RVEN"}, 
        {symbol : "USAK"}, 
        {symbol : "CMS"}, 
        {symbol : "NAIL"}, 
        {symbol : "MLPE"}, 
        {symbol : "QTNA"}, 
        {symbol : "OPK"}, 
        {symbol : "USPH"}, 
        {symbol : "SQQQ"}, 
        {symbol : "UGL"}, 
        {symbol : "UEVM"}, 
        {symbol : "PDCO"}, 
        {symbol : "INFY"}, 
        {symbol : "EVTC"}, 
        {symbol : "AQNB"}, 
        {symbol : "GPMT"}, 
        {symbol : "FWDI"}, 
        {symbol : "SOVB"}, 
        {symbol : "LN"}, 
        {symbol : "ABC"}, 
        {symbol : "NTC"}, 
        {symbol : "FRGI"}, 
        {symbol : "EQGP"}, 
        {symbol : "SCHV"}, 
        {symbol : "RDVT"}, 
        {symbol : "HDMV"}, 
        {symbol : "SYE"}, 
        {symbol : "AKR"}, 
        {symbol : "FFWM"}, 
        {symbol : "MDCO"}, 
        {symbol : "MDSO"}, 
        {symbol : "ISCF"}, 
        {symbol : "GOVT"}, 
        {symbol : "SGRP"}, 
        {symbol : "AAME"}, 
        {symbol : "YELP"}, 
        {symbol : "IVOO"}, 
        {symbol : "HUNTW"}, 
        {symbol : "KKR-B"}, 
        {symbol : "GMFL"}, 
        {symbol : "DWX"}, 
        {symbol : "RLJ-A"}, 
        {symbol : "INSE"}, 
        {symbol : "PLAY"}, 
        {symbol : "CBRE"}, 
        {symbol : "JMPB"}, 
        {symbol : "AY"}, 
        {symbol : "RDIV"}, 
        {symbol : "VICR"}, 
        {symbol : "PFO"}, 
        {symbol : "HST"}, 
        {symbol : "TESO"}, 
        {symbol : "VLY-B"}, 
        {symbol : "TOO-A"}, 
        {symbol : "AEP"}, 
        {symbol : "ELLI"}, 
        {symbol : "BIL"}, 
        {symbol : "FIEG"}, 
        {symbol : "JSYNW"}, 
        {symbol : "CTR"}, 
        {symbol : "HYGV"}, 
        {symbol : "DNP"}, 
        {symbol : "WD"}, 
        {symbol : "PLAN"}, 
        {symbol : "HMG"}, 
        {symbol : "LEVB"}, 
        {symbol : "NGE"}, 
        {symbol : "CZR"}, 
        {symbol : "FXZ"}, 
        {symbol : "HIMX"}, 
        {symbol : "CHE"}, 
        {symbol : "UCFC"}, 
        {symbol : "JHD"}, 
        {symbol : "CLNC"}, 
        {symbol : "CCS"}, 
        {symbol : "PXLV"}, 
        {symbol : "RAS-C"}, 
        {symbol : "EBS"}, 
        {symbol : "AEB"}, 
        {symbol : "KTF"}, 
        {symbol : "CPRT"}, 
        {symbol : "IMXI"}, 
        {symbol : "RNR-E"}, 
        {symbol : "GEF.B"}, 
        {symbol : "VFVA"}, 
        {symbol : "FBIZ"}, 
        {symbol : "GOLF"}, 
        {symbol : "KURA"}, 
        {symbol : "SOHU"}, 
        {symbol : "GNE-A"}, 
        {symbol : "SIMO"}, 
        {symbol : "HFBL"}, 
        {symbol : "ONEQ"}, 
        {symbol : "BABA"}, 
        {symbol : "OILB"}, 
        {symbol : "AIEQ"}, 
        {symbol : "SCHM"}, 
        {symbol : "ESNT"}, 
        {symbol : "NYLD"}, 
        {symbol : "ETRN"}, 
        {symbol : "TGB"}, 
        {symbol : "BRPAW"}, 
        {symbol : "GEH*"}, 
        {symbol : "QUAD"}, 
        {symbol : "RYU"}, 
        {symbol : "JPM-B*"}, 
        {symbol : "LTHM"}, 
        {symbol : "COST"}, 
        {symbol : "EUSA"}, 
        {symbol : "NICE"}, 
        {symbol : "VR-B"}, 
        {symbol : "USA"}, 
        {symbol : "XKII"}, 
        {symbol : "PSMB"}, 
        {symbol : "PRGO"}, 
        {symbol : "CCC"}, 
        {symbol : "CDR-B"}, 
        {symbol : "PJP"}, 
        {symbol : "COMG"}, 
        {symbol : "IFN"}, 
        {symbol : "EMCG"}, 
        {symbol : "TG"}, 
        {symbol : "TROV"}, 
        {symbol : "GASS"}, 
        {symbol : "IDRA"}, 
        {symbol : "DVYE"}, 
        {symbol : "PZRX"}, 
        {symbol : "DKS"}, 
        {symbol : "FVAL"}, 
        {symbol : "MTR"}, 
        {symbol : "FOXF"}, 
        {symbol : "IVTY"}, 
        {symbol : "REML"}, 
        {symbol : "TOL"}, 
        {symbol : "HNI"}, 
        {symbol : "ISRG"}, 
        {symbol : "EGBN"}, 
        {symbol : "MG"}, 
        {symbol : "ICLR"}, 
        {symbol : "EFFE"}, 
        {symbol : "TW"}, 
        {symbol : "BYFC"}, 
        {symbol : "COMB"}, 
        {symbol : "CN"}, 
        {symbol : "FTDRV"}, 
        {symbol : "MLPA"}, 
        {symbol : "MOFG"}, 
        {symbol : "PLW"}, 
        {symbol : "DXJF"}, 
        {symbol : "CMT"}, 
        {symbol : "AE"}, 
        {symbol : "WGO"}, 
        {symbol : "CMU"}, 
        {symbol : "GAB-J"}, 
        {symbol : "JSYNR"}, 
        {symbol : "RELL"}, 
        {symbol : "OSCV"}, 
        {symbol : "GLAD"}, 
        {symbol : "MOH"}, 
        {symbol : "BONT"}, 
        {symbol : "RSO-B"}, 
        {symbol : "APAM"}, 
        {symbol : "GPAC"}, 
        {symbol : "MOGU"}, 
        {symbol : "EQM"}, 
        {symbol : "FDNI"}, 
        {symbol : "CMDY"}, 
        {symbol : "GXG"}, 
        {symbol : "CAB"}, 
        {symbol : "TCAP"}, 
        {symbol : "KBH"}, 
        {symbol : "LADR"}, 
        {symbol : "ASB+"}, 
        {symbol : "MAIN"}, 
        {symbol : "POPE"}, 
        {symbol : "SRV"}, 
        {symbol : "BRS"}, 
        {symbol : "NBY"}, 
        {symbol : "BHC"}, 
        {symbol : "MINT"}, 
        {symbol : "BLOK"}, 
        {symbol : "DRSK"}, 
        {symbol : "RAVE"}, 
        {symbol : "PCG-C"}, 
        {symbol : "TWM"}, 
        {symbol : "SVA"}, 
        {symbol : "IOSP"}, 
        {symbol : "EFSC"}, 
        {symbol : "NVAX"}, 
        {symbol : "LDL"}, 
        {symbol : "ARKR"}, 
        {symbol : "KALL"}, 
        {symbol : "CALM"}, 
        {symbol : "BKE"}, 
        {symbol : "NFE"}, 
        {symbol : "SRNE"}, 
        {symbol : "AGC"}, 
        {symbol : "AOA"}, 
        {symbol : "GUNR"}, 
        {symbol : "GRAM"}, 
        {symbol : "PCRX"}, 
        {symbol : "ASTE"}, 
        {symbol : "OPGN"}, 
        {symbol : "SF-A"}, 
        {symbol : "NYMX"}, 
        {symbol : "SATS"}, 
        {symbol : "FSZ"}, 
        {symbol : "VBLT"}, 
        {symbol : "GLOW"}, 
        {symbol : "CONE"}, 
        {symbol : "ESBK"}, 
        {symbol : "ICL"}, 
        {symbol : "BOH"}, 
        {symbol : "APD"}, 
        {symbol : "IMOM"}, 
        {symbol : "MXC"}, 
        {symbol : "FLJP"}, 
        {symbol : "KHC"}, 
        {symbol : "SGH"}, 
        {symbol : "SPYG"}, 
        {symbol : "STAG-B"}, 
        {symbol : "UBR"}, 
        {symbol : "MER-P"}, 
        {symbol : "JHMI"}, 
        {symbol : "DOMO"}, 
        {symbol : "TEUM"}, 
        {symbol : "SNN"}, 
        {symbol : "XNCR"}, 
        {symbol : "FOF"}, 
        {symbol : "TBRG"}, 
        {symbol : "DALT"}, 
        {symbol : "EQWS"}, 
        {symbol : "PDM"}, 
        {symbol : "DYAI"}, 
        {symbol : "FTAC"}, 
        {symbol : "THO"}, 
        {symbol : "IRBO"}, 
        {symbol : "ARCI"}, 
        {symbol : "CBPX"}, 
        {symbol : "AIZP"}, 
        {symbol : "PAR"}, 
        {symbol : "BCOW"}, 
        {symbol : "SOV-C"}, 
        {symbol : "GNTY"}, 
        {symbol : "GG"}, 
        {symbol : "ICCH"}, 
        {symbol : "LION"}, 
        {symbol : "DTW"}, 
        {symbol : "OMAD="}, 
        {symbol : "APY"}, 
        {symbol : "NGLS-A"}, 
        {symbol : "AOM"}, 
        {symbol : "TOO"}, 
        {symbol : "EHIC"}, 
        {symbol : "GXC"}, 
        {symbol : "ALNA"}, 
        {symbol : "PROV"}, 
        {symbol : "WTER"}, 
        {symbol : "TRTX"}, 
        {symbol : "BGG"}, 
        {symbol : "JHML"}, 
        {symbol : "FIS"}, 
        {symbol : "JPI"}, 
        {symbol : "ALB"}, 
        {symbol : "INBKL"}, 
        {symbol : "SCD"}, 
        {symbol : "BGX"}, 
        {symbol : "CREE"}, 
        {symbol : "FLHK"}, 
        {symbol : "AQST"}, 
        {symbol : "RBZ"}, 
        {symbol : "BGCA"}, 
        {symbol : "FONR"}, 
        {symbol : "AGND"}, 
        {symbol : "NKG"}, 
        {symbol : "DWM"}, 
        {symbol : "GBNK"}, 
        {symbol : "MOGO"}, 
        {symbol : "PASS"}, 
        {symbol : "DWCR"}, 
        {symbol : "NCI"}, 
        {symbol : "PYX"}, 
        {symbol : "TOWN"}, 
        {symbol : "REV"}, 
        {symbol : "HLNE"}, 
        {symbol : "UIHC"}, 
        {symbol : "GLOG-A"}, 
        {symbol : "WDR"}, 
        {symbol : "UUP"}, 
        {symbol : "PMM"}, 
        {symbol : "PNW"}, 
        {symbol : "UCHF"}, 
        {symbol : "AMRX"}, 
        {symbol : "EUFN"}, 
        {symbol : "RHT"}, 
        {symbol : "SLG-I"}, 
        {symbol : "I"}, 
        {symbol : "RFIL"}, 
        {symbol : "PCM"}, 
        {symbol : "ILPT"}, 
        {symbol : "QTUM"}, 
        {symbol : "SJI"}, 
        {symbol : "TKAT"}, 
        {symbol : "OVAS"}, 
        {symbol : "TRIB"}, 
        {symbol : "IWM"}, 
        {symbol : "HCAP"}, 
        {symbol : "LKFN"}, 
        {symbol : "ITCI"}, 
        {symbol : "WBIH"}, 
        {symbol : "RAMP"}, 
        {symbol : "ALP-O"}, 
        {symbol : "SWN"}, 
        {symbol : "GRP="}, 
        {symbol : "ITRI"}, 
        {symbol : "IHE"}, 
        {symbol : "EURL"}, 
        {symbol : "WFC-O"}, 
        {symbol : "BABY"}, 
        {symbol : "WCFB"}, 
        {symbol : "EXEL"}, 
        {symbol : "CEL"}, 
        {symbol : "HIIQ"}, 
        {symbol : "MCD"}, 
        {symbol : "TEGP"}, 
        {symbol : "XPER"}, 
        {symbol : "UXI"}, 
        {symbol : "CHCT"}, 
        {symbol : "RNGR"}, 
        {symbol : "SCIX"}, 
        {symbol : "QXGG"}, 
        {symbol : "OCUL"}, 
        {symbol : "SHV"}, 
        {symbol : "ALGN"}, 
        {symbol : "GEX"}, 
        {symbol : "ITGR"}, 
        {symbol : "KCE"}, 
        {symbol : "RGLS"}, 
        {symbol : "FCCY"}, 
        {symbol : "FFHG"}, 
        {symbol : "AMED"}, 
        {symbol : "QTT"}, 
        {symbol : "SCI"}, 
        {symbol : "LAMR"}, 
        {symbol : "NESR"}, 
        {symbol : "PTSI"}, 
        {symbol : "LGC"}, 
        {symbol : "NGVT"}, 
        {symbol : "CMSS"}, 
        {symbol : "RICK"}, 
        {symbol : "HBANO"}, 
        {symbol : "LMOS"}, 
        {symbol : "MSL"}, 
        {symbol : "VNLA"}, 
        {symbol : "FIGY"}, 
        {symbol : "FPT"}, 
        {symbol : "GSP"}, 
        {symbol : "RGCO"}, 
        {symbol : "BAX"}, 
        {symbol : "PIE"}, 
        {symbol : "IAGG"}, 
        {symbol : "CLUB"}, 
        {symbol : "CUT"}, 
        {symbol : "XNTK"}, 
        {symbol : "DIG"}, 
      ]);
    });
};


