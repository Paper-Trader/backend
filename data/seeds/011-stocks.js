
exports.seed = function(knex) {
  return knex('stocks')
    .then(function () {
      return knex('stocks').insert([
        {symbol : "NBW"}, 
        {symbol : "RFDA"}, 
        {symbol : "KST"}, 
        {symbol : "CBL-E"}, 
        {symbol : "NSA"}, 
        {symbol : "GCO"}, 
        {symbol : "DJP"}, 
        {symbol : "CII"}, 
        {symbol : "NCZ"}, 
        {symbol : "PPSC"}, 
        {symbol : "MUSA"}, 
        {symbol : "EWN"}, 
        {symbol : "CLRB"}, 
        {symbol : "DXLG"}, 
        {symbol : "ALP-Q"}, 
        {symbol : "HJV"}, 
        {symbol : "NOK"}, 
        {symbol : "IFMK"}, 
        {symbol : "DLX"}, 
        {symbol : "JTPY"}, 
        {symbol : "BNGOU"}, 
        {symbol : "RUN"}, 
        {symbol : "WPG"}, 
        {symbol : "HCCH"}, 
        {symbol : "EDGW"}, 
        {symbol : "SPUU"}, 
        {symbol : "LHCG"}, 
        {symbol : "JP"}, 
        {symbol : "MDLQ"}, 
        {symbol : "NOA"}, 
        {symbol : "FIVN"}, 
        {symbol : "CVR"}, 
        {symbol : "SCCO"}, 
        {symbol : "FAB"}, 
        {symbol : "KMI"}, 
        {symbol : "LKCO"}, 
        {symbol : "AGQ"}, 
        {symbol : "UGBP"}, 
        {symbol : "TESS"}, 
        {symbol : "ALP-O*"}, 
        {symbol : "VXRT"}, 
        {symbol : "SCVL"}, 
        {symbol : "JPM-D"}, 
        {symbol : "OSUR"}, 
        {symbol : "MBFI"}, 
        {symbol : "DGLY"}, 
        {symbol : "C"}, 
        {symbol : "PAHC"}, 
        {symbol : "BDGE"}, 
        {symbol : "OVID"}, 
        {symbol : "OBOR"}, 
        {symbol : "SECT"}, 
        {symbol : "PRSC"}, 
        {symbol : "BSF"}, 
        {symbol : "CPTAL"}, 
        {symbol : "VCO"}, 
        {symbol : "TI"}, 
        {symbol : "GCP"}, 
        {symbol : "DLR-H"}, 
        {symbol : "PLXP"}, 
        {symbol : "GMO"}, 
        {symbol : "IPCC"}, 
        {symbol : "BSPM"}, 
        {symbol : "ALC"}, 
        {symbol : "DOOO"}, 
        {symbol : "SIX"}, 
        {symbol : "TANNL"}, 
        {symbol : "IBMG"}, 
        {symbol : "PGH"}, 
        {symbol : "HNP"}, 
        {symbol : "PEI-D"}, 
        {symbol : "BEAT"}, 
        {symbol : "EGLE"}, 
        {symbol : "MDWD"}, 
        {symbol : "FPL"}, 
        {symbol : "DAN"}, 
        {symbol : "ULE"}, 
        {symbol : "SCKT"}, 
        {symbol : "SNDX"}, 
        {symbol : "FRBK"}, 
        {symbol : "QTWO"}, 
        {symbol : "SIGM"}, 
        {symbol : "BPMX"}, 
        {symbol : "SAGG"}, 
        {symbol : "IYT"}, 
        {symbol : "SDS"}, 
        {symbol : "EDUC"}, 
        {symbol : "FEX"}, 
        {symbol : "INAP"}, 
        {symbol : "CODI"}, 
        {symbol : "SYNA"}, 
        {symbol : "KRU"}, 
        {symbol : "HUBG"}, 
        {symbol : "LRGF"}, 
        {symbol : "MYND"}, 
        {symbol : "DFE"}, 
        {symbol : "DMRI"}, 
        {symbol : "TGNA"}, 
        {symbol : "EQNR"}, 
        {symbol : "CSLT"}, 
        {symbol : "UNH"}, 
        {symbol : "TGA"}, 
        {symbol : "IBKR"}, 
        {symbol : "PFSI"}, 
        {symbol : "AMRS"}, 
        {symbol : "XOMA"}, 
        {symbol : "DES"}, 
        {symbol : "ARA"}, 
        {symbol : "AZPN"}, 
        {symbol : "CYTX"}, 
        {symbol : "MGV"}, 
        {symbol : "CUZ"}, 
        {symbol : "NTZ"}, 
        {symbol : "XRT"}, 
        {symbol : "FEN"}, 
        {symbol : "OPES"}, 
        {symbol : "ELLO"}, 
        {symbol : "PSI"}, 
        {symbol : "EIM"}, 
        {symbol : "MUNI"}, 
        {symbol : "GSM"}, 
        {symbol : "KFFB"}, 
        {symbol : "HYUP"}, 
        {symbol : "OCIP"}, 
        {symbol : "FSLY"}, 
        {symbol : "DSWL"}, 
        {symbol : "USMV"}, 
        {symbol : "SCPL"}, 
        {symbol : "CHIE"}, 
        {symbol : "EMMS"}, 
        {symbol : "CALA"}, 
        {symbol : "JUST"}, 
        {symbol : "COTV"}, 
        {symbol : "RILYG"}, 
        {symbol : "CHSCP"}, 
        {symbol : "ITM"}, 
        {symbol : "STO"}, 
        {symbol : "ONE"}, 
        {symbol : "LIQT"}, 
        {symbol : "WFC+"}, 
        {symbol : "MNDO"}, 
        {symbol : "LPNT"}, 
        {symbol : "HYB"}, 
        {symbol : "AWTM"}, 
        {symbol : "TROX"}, 
        {symbol : "SORL"}, 
        {symbol : "RF"}, 
        {symbol : "FTEC"}, 
        {symbol : "INCR"}, 
        {symbol : "EVOP"}, 
        {symbol : "YGTY"}, 
        {symbol : "DWCH"}, 
        {symbol : "NEWR"}, 
        {symbol : "NXEOU"}, 
        {symbol : "MYD"}, 
        {symbol : "NSS"}, 
        {symbol : "ARGX"}, 
        {symbol : "AGZ"}, 
        {symbol : "CAFD"}, 
        {symbol : "STT-C"}, 
        {symbol : "ACST"}, 
        {symbol : "RVT"}, 
        {symbol : "HABT"}, 
        {symbol : "HRG"}, 
        {symbol : "DEI"}, 
        {symbol : "XLK"}, 
        {symbol : "AGLE"}, 
        {symbol : "BJUL"}, 
        {symbol : "NP"}, 
        {symbol : "SYBX"}, 
        {symbol : "MBINP"}, 
        {symbol : "AMRWW"}, 
        {symbol : "SEA"}, 
        {symbol : "FXB"}, 
        {symbol : "NYCB"}, 
        {symbol : "BIVV"}, 
        {symbol : "DFS-B*"}, 
        {symbol : "FIBK"}, 
        {symbol : "AME"}, 
        {symbol : "AVX"}, 
        {symbol : "BUFF"}, 
        {symbol : "TCRX"}, 
        {symbol : "IJH"}, 
        {symbol : "LEDS"}, 
        {symbol : "SCE-L"}, 
        {symbol : "EWP"}, 
        {symbol : "PSCC"}, 
        {symbol : "BPFH"}, 
        {symbol : "SCHP"}, 
        {symbol : "HBANN"}, 
        {symbol : "FNLC"}, 
        {symbol : "PKG"}, 
        {symbol : "MOV"}, 
        {symbol : "PLAG"}, 
        {symbol : "AXR"}, 
        {symbol : "AEIS"}, 
        {symbol : "SOXX"}, 
        {symbol : "UTG"}, 
        {symbol : "CFFI"}, 
        {symbol : "TGTX"}, 
        {symbol : "TIS"}, 
        {symbol : "LCAHU"}, 
        {symbol : "PSK"}, 
        {symbol : "A"}, 
        {symbol : "BSGM"}, 
        {symbol : "IEC"}, 
        {symbol : "LAYN"}, 
        {symbol : "VVPR"}, 
        {symbol : "V"}, 
        {symbol : "LGLV"}, 
        {symbol : "FLCO"}, 
        {symbol : "CARV"}, 
        {symbol : "IRTC"}, 
        {symbol : "TRCO"}, 
        {symbol : "OTEL"}, 
        {symbol : "TWOU"}, 
        {symbol : "CNC"}, 
        {symbol : "SHYG"}, 
        {symbol : "OTLK"}, 
        {symbol : "DAG"}, 
        {symbol : "P"}, 
        {symbol : "HUBB"}, 
        {symbol : "IF"}, 
        {symbol : "ZUMZ"}, 
        {symbol : "BHTG"}, 
        {symbol : "AYI"}, 
        {symbol : "FXY"}, 
        {symbol : "MHN"}, 
        {symbol : "BRKS"}, 
        {symbol : "STZ.B"}, 
        {symbol : "MEOH"}, 
        {symbol : "TRNS"}, 
        {symbol : "SFM"}, 
        {symbol : "AFGB"}, 
        {symbol : "SOJA"}, 
        {symbol : "IBML"}, 
        {symbol : "GEH"}, 
        {symbol : "RMP"}, 
        {symbol : "DVD"}, 
        {symbol : "IDA"}, 
        {symbol : "EVX"}, 
        {symbol : "MNI"}, 
        {symbol : "NCV"}, 
        {symbol : "LMNR"}, 
        {symbol : "SNSR"}, 
        {symbol : "FLL"}, 
        {symbol : "GOODP"}, 
        {symbol : "SAIC"}, 
        {symbol : "PED"}, 
        {symbol : "SLCA"}, 
        {symbol : "VYM"}, 
        {symbol : "BANFP"}, 
        {symbol : "XITK"}, 
        {symbol : "DOGS"}, 
        {symbol : "THOR"}, 
        {symbol : "ITI"}, 
        {symbol : "RCKT"}, 
        {symbol : "FPF"}, 
        {symbol : "EPC"}, 
        {symbol : "ETX"}, 
        {symbol : "SYNC"}, 
        {symbol : "PHIIK"}, 
        {symbol : "CUE"}, 
        {symbol : "SPHS"}, 
        {symbol : "OGE"}, 
        {symbol : "EWGS"}, 
        {symbol : "XSPA"}, 
        {symbol : "BHB"}, 
        {symbol : "NMT"}, 
        {symbol : "JQC"}, 
        {symbol : "CMPR"}, 
        {symbol : "DD-A"}, 
        {symbol : "LGC+"}, 
        {symbol : "QADB"}, 
        {symbol : "MYFW"}, 
        {symbol : "SYN"}, 
        {symbol : "FNSR"}, 
        {symbol : "ENTA"}, 
        {symbol : "PAGS"}, 
        {symbol : "URGN"}, 
        {symbol : "RAVI"}, 
        {symbol : "EWL"}, 
        {symbol : "SCIJ"}, 
        {symbol : "NPO"}, 
        {symbol : "JJA"}, 
        {symbol : "JPHF"}, 
        {symbol : "SJIU"}, 
        {symbol : "NTWK"}, 
        {symbol : "SSW-I"}, 
        {symbol : "BML-G"}, 
        {symbol : "TTAC"}, 
        {symbol : "LBCC"}, 
        {symbol : "MAB"}, 
        {symbol : "NHC"}, 
        {symbol : "PH"}, 
        {symbol : "CIBR"}, 
        {symbol : "CJJD"}, 
        {symbol : "EPR-E"}, 
        {symbol : "BUI"}, 
        {symbol : "LTRPA"}, 
        {symbol : "BZUN"}, 
        {symbol : "KSU"}, 
        {symbol : "CBK"}, 
        {symbol : "GLDM"}, 
        {symbol : "BKLN"}, 
        {symbol : "WIRE"}, 
        {symbol : "HSON"}, 
        {symbol : "BRPAR"}, 
        {symbol : "XLP"}, 
        {symbol : "CNXR"}, 
        {symbol : "FRC-F"}, 
        {symbol : "OFG-D"}, 
        {symbol : "MORT"}, 
        {symbol : "ARRS"}, 
        {symbol : "NQ"}, 
        {symbol : "GRX-A"}, 
        {symbol : "BOOM"}, 
        {symbol : "GGAL"}, 
        {symbol : "RYI"}, 
        {symbol : "GEO"}, 
        {symbol : "ALEC"}, 
        {symbol : "WLFC"}, 
        {symbol : "HD"}, 
        {symbol : "BGB"}, 
        {symbol : "SPMO"}, 
        {symbol : "IHG"}, 
        {symbol : "XVZ"}, 
        {symbol : "OVOL"}, 
        {symbol : "BAF"}, 
        {symbol : "PTN"}, 
        {symbol : "KONA"}, 
        {symbol : "PCF"}, 
        {symbol : "OFIX"}, 
        {symbol : "GAINL"}, 
        {symbol : "BXP"}, 
        {symbol : "AVNS"}, 
        {symbol : "ALRN"}, 
        {symbol : "WWR"}, 
        {symbol : "CARA"}, 
        {symbol : "UNT"}, 
        {symbol : "EDIV"}, 
        {symbol : "DRNA"}, 
        {symbol : "ISEE"}, 
        {symbol : "IEAWW"}, 
        {symbol : "HL"}, 
        {symbol : "RWT"}, 
        {symbol : "GGB"}, 
        {symbol : "WTRE"}, 
        {symbol : "NVS"}, 
        {symbol : "ACRS"}, 
        {symbol : "IHT"}, 
        {symbol : "TUSK"}, 
        {symbol : "ANF"}, 
        {symbol : "SPPI"}, 
        {symbol : "AGGY"}, 
        {symbol : "CNF"}, 
        {symbol : "NEWS"}, 
        {symbol : "PJH"}, 
        {symbol : "IDOG"}, 
        {symbol : "OBAS"}, 
        {symbol : "FLTW"}, 
        {symbol : "ESGRP"}, 
        {symbol : "ZPIN"}, 
        {symbol : "SPLX"}, 
        {symbol : "PGNX"}, 
        {symbol : "CPLA"}, 
        {symbol : "MKL"}, 
        {symbol : "RAAX"}, 
        {symbol : "NYF"}, 
        {symbol : "EXPO"}, 
        {symbol : "ERIC"}, 
        {symbol : "KS"}, 
        {symbol : "HSEA*"}, 
        {symbol : "PSX"}, 
        {symbol : "NUMG"}, 
        {symbol : "EFT"}, 
        {symbol : "UBER"}, 
        {symbol : "AVGR"}, 
        {symbol : "EWI"}, 
        {symbol : "VBIV"}, 
        {symbol : "CYD"}, 
        {symbol : "PGEM"}, 
        {symbol : "ELAN"}, 
        {symbol : "IBKCN"}, 
        {symbol : "BBT-G"}, 
        {symbol : "JAKK"}, 
        {symbol : "LEVL"}, 
        {symbol : "CFG"}, 
        {symbol : "VRSK"}, 
        {symbol : "XDIV"}, 
        {symbol : "WREI"}, 
        {symbol : "MOSC+"}, 
        {symbol : "SRE-A"}, 
        {symbol : "AFG"}, 
        {symbol : "JMIN"}, 
        {symbol : "MNA"}, 
        {symbol : "BMLP"}, 
        {symbol : "FMCIU"}, 
        {symbol : "GLL"}, 
        {symbol : "ITA"}, 
        {symbol : "NK"}, 
        {symbol : "OCSLL"}, 
        {symbol : "DNB"}, 
        {symbol : "IDE"}, 
        {symbol : "PULM"}, 
        {symbol : "DD"}, 
        {symbol : "AVTR"}, 
        {symbol : "ACB"}, 
        {symbol : "CGC"}, 
        {symbol : "PK"}, 
        {symbol : "GT"}, 
        {symbol : "TUFN"}, 
        {symbol : "EGAN"}, 
        {symbol : "HYLV"}, 
        {symbol : "DON"}, 
        {symbol : "UBN"}, 
        {symbol : "DTSS"}, 
        {symbol : "CTRC"}, 
        {symbol : "RISE"}, 
        {symbol : "FLMI"}, 
        {symbol : "HALL"}, 
        {symbol : "BGRN"}, 
        {symbol : "SBIO"}, 
        {symbol : "RCKY"}, 
        {symbol : "ENOR"}, 
        {symbol : "GLO"}, 
        {symbol : "SCON"}, 
        {symbol : "INSI"}, 
        {symbol : "GBL"}, 
        {symbol : "MFL"}, 
        {symbol : "ACCO"}, 
        {symbol : "BYLD"}, 
        {symbol : "SQ"}, 
        {symbol : "CNCR"}, 
        {symbol : "NEW"}, 
        {symbol : "WLTW"}, 
        {symbol : "FGD"}, 
        {symbol : "DEM"}, 
        {symbol : "IXJ"}, 
        {symbol : "PTGX"}, 
        {symbol : "IHC"}, 
        {symbol : "PDS"}, 
        {symbol : "GDNA"}, 
        {symbol : "GLUU"}, 
        {symbol : "ERII"}, 
        {symbol : "REFA"}, 
        {symbol : "CGO"}, 
        {symbol : "SPLP-A"}, 
        {symbol : "CPA"}, 
        {symbol : "RFAP"}, 
        {symbol : "XSW"}, 
        {symbol : "IMGN"}, 
        {symbol : "NHTC"}, 
        {symbol : "HWKN"}, 
        {symbol : "FRME"}, 
        {symbol : "DSPG"}, 
        {symbol : "SNES"}, 
        {symbol : "MCRN"}, 
        {symbol : "POL"}, 
        {symbol : "LCA"}, 
        {symbol : "STMP"}, 
        {symbol : "CLGX"}, 
        {symbol : "WM"}, 
        {symbol : "TMF"}, 
        {symbol : "HDSN"}, 
        {symbol : "AQN"}, 
        {symbol : "BAM"}, 
        {symbol : "JPIN"}, 
        {symbol : "IPAR"}, 
        {symbol : "CNY"}, 
        {symbol : "TENB"}, 
        {symbol : "ILMN"}, 
        {symbol : "USCR"}, 
        {symbol : "VSH"}, 
        {symbol : "ECHO"}, 
        {symbol : "SEP"}, 
        {symbol : "CYRX"}, 
        {symbol : "SSY"}, 
        {symbol : "PRE-H"}, 
        {symbol : "EDRY"}, 
        {symbol : "GII"}, 
        {symbol : "CBNK"}, 
        {symbol : "KTB"}, 
        {symbol : "MTEM"}, 
        {symbol : "TRMK"}, 
        {symbol : "TPOR"}, 
        {symbol : "EMF"}, 
        {symbol : "YDIV"}, 
        {symbol : "GOOG"}, 
        {symbol : "SGMA"}, 
        {symbol : "MMSI"}, 
        {symbol : "ADUS"}, 
        {symbol : "ARTX"}, 
        {symbol : "GEB*"}, 
        {symbol : "GDV-D"}, 
        {symbol : "DDR"}, 
        {symbol : "PIO"}, 
        {symbol : "PRTS"}, 
        {symbol : "LKSD"}, 
        {symbol : "AGM-B"}, 
      ]);
    });
};


