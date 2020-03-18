
exports.seed = function(knex) {
  return knex('stocks')
    .then(function () {
      return knex('stocks').insert([
        {symbol : "MMDMW"}, 
        {symbol : "KVHI"}, 
        {symbol : "SHOP"}, 
        {symbol : "CSGP"}, 
        {symbol : "CVEO"}, 
        {symbol : "ETE"}, 
        {symbol : "HCFT-A"}, 
        {symbol : "RPAI"}, 
        {symbol : "MRKR"}, 
        {symbol : "HEFA"}, 
        {symbol : "KYO"}, 
        {symbol : "ENTR"}, 
        {symbol : "JEC"}, 
        {symbol : "WLDN"}, 
        {symbol : "SSWN"}, 
        {symbol : "IEP"}, 
        {symbol : "MVCD"}, 
        {symbol : "BSCN"}, 
        {symbol : "VREX"}, 
        {symbol : "EMCI"}, 
        {symbol : "SCHK"}, 
        {symbol : "AMGN"}, 
        {symbol : "BIB"}, 
        {symbol : "SMTC"}, 
        {symbol : "GSUM"}, 
        {symbol : "GIB"}, 
        {symbol : "STX"}, 
        {symbol : "IOTS"}, 
        {symbol : "ANGI"}, 
        {symbol : "HOVNP"}, 
        {symbol : "XRAY"}, 
        {symbol : "KLXI"}, 
        {symbol : "XKFF"}, 
        {symbol : "GLBZ"}, 
        {symbol : "KODK+A"}, 
        {symbol : "FHK"}, 
        {symbol : "ESTA"}, 
        {symbol : "DDM"}, 
        {symbol : "GGZ"}, 
        {symbol : "GBT"}, 
        {symbol : "MHNC"}, 
        {symbol : "SANM"}, 
        {symbol : "EMAN"}, 
        {symbol : "EDEN"}, 
        {symbol : "CNX"}, 
        {symbol : "PERI"}, 
        {symbol : "MTP"}, 
        {symbol : "FLLV"}, 
        {symbol : "AVK"}, 
        {symbol : "GFNSL"}, 
        {symbol : "EGC"}, 
        {symbol : "SBPH"}, 
        {symbol : "MIK"}, 
        {symbol : "AGRO"}, 
        {symbol : "BNFT"}, 
        {symbol : "KFRC"}, 
        {symbol : "ICAD"}, 
        {symbol : "OEC"}, 
        {symbol : "GDP"}, 
        {symbol : "STT-D"}, 
        {symbol : "BJJN"}, 
        {symbol : "SPB"}, 
        {symbol : "IVR-B"}, 
        {symbol : "MFSF"}, 
        {symbol : "AIR"}, 
        {symbol : "OBLN"}, 
        {symbol : "PSEC"}, 
        {symbol : "NEA"}, 
        {symbol : "ENZ"}, 
        {symbol : "ALGRW"}, 
        {symbol : "LINK"}, 
        {symbol : "TOO-E"}, 
        {symbol : "RYAAY"}, 
        {symbol : "IRR"}, 
        {symbol : "SMAR"}, 
        {symbol : "CVS"}, 
        {symbol : "CYOU"}, 
        {symbol : "DXJ"}, 
        {symbol : "HCXZ"}, 
        {symbol : "CTU"}, 
        {symbol : "LGCYP"}, 
        {symbol : "NVO"}, 
        {symbol : "AFH"}, 
        {symbol : "CASS"}, 
        {symbol : "KAAC"}, 
        {symbol : "HYS"}, 
        {symbol : "FCOR"}, 
        {symbol : "BELFA"}, 
        {symbol : "R"}, 
        {symbol : "SWIR"}, 
        {symbol : "BSQR"}, 
        {symbol : "IBCE"}, 
        {symbol : "SAF"}, 
        {symbol : "PWV"}, 
        {symbol : "NOV"}, 
        {symbol : "CLPR"}, 
        {symbol : "ARNC-"}, 
        {symbol : "GSY"}, 
        {symbol : "PHIOW"}, 
        {symbol : "ISHG"}, 
        {symbol : "BJZ"}, 
        {symbol : "CRTN"}, 
        {symbol : "ZDEU"}, 
        {symbol : "BAP"}, 
        {symbol : "PLUG"}, 
        {symbol : "CTRV"}, 
        {symbol : "HEUV"}, 
        {symbol : "EFAD"}, 
        {symbol : "GIII"}, 
        {symbol : "GFED"}, 
        {symbol : "NXC"}, 
        {symbol : "DVYA"}, 
        {symbol : "BGI"}, 
        {symbol : "CRS"}, 
        {symbol : "NC"}, 
        {symbol : "AEZS"}, 
        {symbol : "LEAD"}, 
        {symbol : "GBIL"}, 
        {symbol : "GBCI"}, 
        {symbol : "AAAU"}, 
        {symbol : "DDR-J"}, 
        {symbol : "PNQI"}, 
        {symbol : "LSXMK"}, 
        {symbol : "EYPT"}, 
        {symbol : "DAKT"}, 
        {symbol : "DCI"}, 
        {symbol : "DLNG-A"}, 
        {symbol : "DRRX"}, 
        {symbol : "HZN"}, 
        {symbol : "IPOA="}, 
        {symbol : "PMO"}, 
        {symbol : "RNP"}, 
        {symbol : "LMRK"}, 
        {symbol : "VIOG"}, 
        {symbol : "AGM-A"}, 
        {symbol : "GGN"}, 
        {symbol : "CHH"}, 
        {symbol : "OPTT"}, 
        {symbol : "CTBI"}, 
        {symbol : "GLNG"}, 
        {symbol : "XHB"}, 
        {symbol : "CE"}, 
        {symbol : "AMH-B"}, 
        {symbol : "AQXP"}, 
        {symbol : "MBSD"}, 
        {symbol : "FRI"}, 
        {symbol : "CORE"}, 
        {symbol : "HOLX"}, 
        {symbol : "SRF"}, 
        {symbol : "BSJP"}, 
        {symbol : "JASN"}, 
        {symbol : "KMG"}, 
        {symbol : "KXINW"}, 
        {symbol : "WES"}, 
        {symbol : "BIOC"}, 
        {symbol : "DHY"}, 
        {symbol : "TECS"}, 
        {symbol : "WRLSR"}, 
        {symbol : "FDM"}, 
        {symbol : "RNWK"}, 
        {symbol : "AINC"}, 
        {symbol : "BBGI"}, 
        {symbol : "GNPX"}, 
        {symbol : "BSCH"}, 
        {symbol : "MKC"}, 
        {symbol : "CMRE-E"}, 
        {symbol : "GOAT"}, 
        {symbol : "IFRX"}, 
        {symbol : "TSLA"}, 
        {symbol : "CNP-B"}, 
        {symbol : "PATI"}, 
        {symbol : "WTIU"}, 
        {symbol : "BYD"}, 
        {symbol : "SR-A"}, 
        {symbol : "RESI"}, 
        {symbol : "JSM"}, 
        {symbol : "TDS"}, 
        {symbol : "HII"}, 
        {symbol : "APOP"}, 
        {symbol : "SBCF"}, 
        {symbol : "HARP"}, 
        {symbol : "EPIX"}, 
        {symbol : "POR"}, 
        {symbol : "GLW"}, 
        {symbol : "CNACW"}, 
        {symbol : "BAC-I"}, 
        {symbol : "OIL"}, 
        {symbol : "DWDP"}, 
        {symbol : "TLP"}, 
        {symbol : "PSTI"}, 
        {symbol : "DHCP"}, 
        {symbol : "RELX"}, 
        {symbol : "MTK"}, 
        {symbol : "PBDM"}, 
        {symbol : "REK"}, 
        {symbol : "WEAR"}, 
        {symbol : "JDST"}, 
        {symbol : "ANCN"}, 
        {symbol : "BOFIL"}, 
        {symbol : "SPLK"}, 
        {symbol : "IDMO"}, 
        {symbol : "SNPS"}, 
        {symbol : "MSP"}, 
        {symbol : "CAVM"}, 
        {symbol : "CPSH"}, 
        {symbol : "RJA"}, 
        {symbol : "FTNT"}, 
        {symbol : "TTD"}, 
        {symbol : "MMYT"}, 
        {symbol : "UAG"}, 
        {symbol : "UROV"}, 
        {symbol : "KRP"}, 
        {symbol : "GDOT"}, 
        {symbol : "NEAR"}, 
        {symbol : "TJX"}, 
        {symbol : "CHIS"}, 
        {symbol : "ONTL"}, 
        {symbol : "PSA-U"}, 
        {symbol : "TWLVU"}, 
        {symbol : "CDAY"}, 
        {symbol : "CHIX"}, 
        {symbol : "ECCY"}, 
        {symbol : "ZROZ"}, 
        {symbol : "REFR"}, 
        {symbol : "ASPU"}, 
        {symbol : "PVL"}, 
        {symbol : "BTN"}, 
        {symbol : "PSB-U"}, 
        {symbol : "NFTY"}, 
        {symbol : "UUUU+"}, 
        {symbol : "APDNW"}, 
        {symbol : "ESGD"}, 
        {symbol : "MX"}, 
        {symbol : "DSGX"}, 
        {symbol : "HSACU"}, 
        {symbol : "SCL"}, 
        {symbol : "TIPT"}, 
        {symbol : "VFMV"}, 
        {symbol : "GQRE"}, 
        {symbol : "PFIE"}, 
        {symbol : "IIN"}, 
        {symbol : "GS-B"}, 
        {symbol : "CRBP"}, 
        {symbol : "AUGR"}, 
        {symbol : "LSCC"}, 
        {symbol : "BCM"}, 
        {symbol : "CBA"}, 
        {symbol : "ACXM"}, 
        {symbol : "WAL"}, 
        {symbol : "XPH"}, 
        {symbol : "MTECU"}, 
        {symbol : "VRSN"}, 
        {symbol : "EVOK"}, 
        {symbol : "VHT"}, 
        {symbol : "WFC-X"}, 
        {symbol : "BXMT"}, 
        {symbol : "ELGX"}, 
        {symbol : "NPN"}, 
        {symbol : "HE-U"}, 
        {symbol : "WTFCM"}, 
        {symbol : "SEND"}, 
        {symbol : "STAG-C"}, 
        {symbol : "MIE"}, 
        {symbol : "PBI"}, 
        {symbol : "ANET"}, 
        {symbol : "FSP"}, 
        {symbol : "TRGP"}, 
        {symbol : "MTFBW"}, 
        {symbol : "SMFG"}, 
        {symbol : "QXTR"}, 
        {symbol : "ESBA"}, 
        {symbol : "OSIR"}, 
        {symbol : "BBCPW"}, 
        {symbol : "DDMXW"}, 
        {symbol : "UBNT"}, 
        {symbol : "GRNB"}, 
        {symbol : "MNOV"}, 
        {symbol : "INGN"}, 
        {symbol : "PERY"}, 
        {symbol : "DBO"}, 
        {symbol : "EXD"}, 
        {symbol : "UL"}, 
        {symbol : "FIV"}, 
        {symbol : "GTS"}, 
        {symbol : "BRACW"}, 
        {symbol : "HIO"}, 
        {symbol : "RYTM"}, 
        {symbol : "ZNGA"}, 
        {symbol : "BC"}, 
        {symbol : "LTSF"}, 
        {symbol : "REGI"}, 
        {symbol : "MITT-A"}, 
        {symbol : "MLCO"}, 
        {symbol : "ASNA"}, 
        {symbol : "SWZ"}, 
        {symbol : "IDHD"}, 
        {symbol : "FFEU"}, 
        {symbol : "FWONK"}, 
        {symbol : "CAW"}, 
        {symbol : "WIX"}, 
        {symbol : "LPTH"}, 
        {symbol : "MODN"}, 
        {symbol : "YETI"}, 
        {symbol : "MOTI"}, 
        {symbol : "MPX"}, 
        {symbol : "EVBG"}, 
        {symbol : "MC"}, 
        {symbol : "NFC"}, 
        {symbol : "DBEF"}, 
        {symbol : "RNDM"}, 
        {symbol : "DBRT"}, 
        {symbol : "TX"}, 
        {symbol : "ALE"}, 
        {symbol : "SID"}, 
        {symbol : "CLY"}, 
        {symbol : "CSML"}, 
        {symbol : "CGW"}, 
        {symbol : "HEWP"}, 
        {symbol : "UBT"}, 
        {symbol : "CFFN"}, 
        {symbol : "PFI"}, 
        {symbol : "EVI"}, 
        {symbol : "CX"}, 
        {symbol : "NWBI"}, 
        {symbol : "BPOP"}, 
        {symbol : "HNRG"}, 
        {symbol : "ZLAB"}, 
        {symbol : "RYN"}, 
        {symbol : "ATHE"}, 
        {symbol : "SCHD"}, 
        {symbol : "EPOL"}, 
        {symbol : "CUBI-D"}, 
        {symbol : "CYBR"}, 
        {symbol : "EMEM"}, 
        {symbol : "USV"}, 
        {symbol : "VCSH"}, 
        {symbol : "HMST"}, 
        {symbol : "PHG"}, 
        {symbol : "CSWCL"}, 
        {symbol : "DTF"}, 
        {symbol : "DCM"}, 
        {symbol : "CAL"}, 
        {symbol : "TAK#"}, 
        {symbol : "DJD"}, 
        {symbol : "PRK"}, 
        {symbol : "APEI"}, 
        {symbol : "MRRL"}, 
        {symbol : "JIGB"}, 
        {symbol : "MARPS"}, 
        {symbol : "XHR"}, 
        {symbol : "CMSC"}, 
        {symbol : "EIO"}, 
        {symbol : "VPU"}, 
        {symbol : "CNDT"}, 
        {symbol : "ABCO"}, 
        {symbol : "JKK"}, 
        {symbol : "EQIX"}, 
        {symbol : "RNN"}, 
        {symbol : "IAUF"}, 
        {symbol : "SRC"}, 
        {symbol : "NXRT"}, 
        {symbol : "HFRO"}, 
        {symbol : "THS"}, 
        {symbol : "TIK"}, 
        {symbol : "MFUS"}, 
        {symbol : "QUS"}, 
        {symbol : "HVT.A"}, 
        {symbol : "FREL"}, 
        {symbol : "ZKIN"}, 
        {symbol : "GLOP"}, 
        {symbol : "CCK"}, 
        {symbol : "GEK"}, 
        {symbol : "INST"}, 
        {symbol : "KORP"}, 
        {symbol : "CIT"}, 
        {symbol : "MS-E"}, 
        {symbol : "PFH"}, 
        {symbol : "NVT"}, 
        {symbol : "FORM"}, 
        {symbol : "TCBI"}, 
        {symbol : "GPS"}, 
        {symbol : "EVHC"}, 
        {symbol : "STIM"}, 
        {symbol : "HEB"}, 
        {symbol : "PAG"}, 
        {symbol : "NEOT"}, 
        {symbol : "SLG"}, 
        {symbol : "SMMT"}, 
        {symbol : "BWP"}, 
        {symbol : "PDSB"}, 
        {symbol : "SRVR"}, 
        {symbol : "CFFAU"}, 
        {symbol : "MILN"}, 
        {symbol : "CAC"}, 
        {symbol : "ILG"}, 
        {symbol : "NUO"}, 
        {symbol : "CMA+"}, 
        {symbol : "GSC"}, 
        {symbol : "LVNTA"}, 
        {symbol : "GEOS"}, 
        {symbol : "SNAK"}, 
        {symbol : "EBF"}, 
        {symbol : "DWLV"}, 
        {symbol : "FSAM"}, 
        {symbol : "TCO-K"}, 
        {symbol : "PAM"}, 
        {symbol : "PFIN"}, 
        {symbol : "CH"}, 
        {symbol : "NI"}, 
        {symbol : "DRV"}, 
        {symbol : "HLM-"}, 
        {symbol : "SAM"}, 
        {symbol : "MGEN"}, 
        {symbol : "URG"}, 
        {symbol : "JBGS"}, 
        {symbol : "BVXV"}, 
        {symbol : "CRD.B"}, 
        {symbol : "GDMA"}, 
        {symbol : "ENVA"}, 
        {symbol : "ESXB"}, 
        {symbol : "PUK-A"}, 
        {symbol : "BBCA"}, 
        {symbol : "WASH"}, 
        {symbol : "GIM"}, 
        {symbol : "SGZA*"}, 
        {symbol : "GPL"}, 
        {symbol : "NIO"}, 
        {symbol : "XEL"}, 
        {symbol : "IDCC"}, 
        {symbol : "KLXIV"}, 
        {symbol : "DGS"}, 
        {symbol : "SRE"}, 
        {symbol : "UNP"}, 
        {symbol : "CHEK"}, 
        {symbol : "CEMP"}, 
        {symbol : "CHEP"}, 
        {symbol : "ISP"}, 
        {symbol : "HCI"}, 
        {symbol : "IYK"}, 
        {symbol : "BCV-A"}, 
        {symbol : "WPM"}, 
        {symbol : "GRF"}, 
        {symbol : "ZXZZT"}, 
        {symbol : "VTWG"}, 
        {symbol : "DLR-J"}, 
        {symbol : "SQZZ"}, 
        {symbol : "RSO-A"}, 
        {symbol : "UCTT"}, 
        {symbol : "EAGL"}, 
        {symbol : "FTSM"}, 
        {symbol : "AIT"}, 
        {symbol : "XOG"}, 
        {symbol : "INDL"}, 
        {symbol : "BPI"}, 
        {symbol : "PER"}, 
        {symbol : "BGCPV"}, 
        {symbol : "OLD"}, 
        {symbol : "CMI"}, 
        {symbol : "RACE"}, 
        {symbol : "SRG"}, 
        {symbol : "ROG"}, 
        {symbol : "OPGNW"}, 
        {symbol : "DWDP#"}, 
        {symbol : "VLY"}, 
        {symbol : "FUN"}, 
        {symbol : "HYDD"}, 
        {symbol : "CLNS-D*"}, 
        {symbol : "SMTS"}, 
        {symbol : "OSPR"}, 
        {symbol : "EWBC"}, 
        {symbol : "HMN"}, 
        {symbol : "IMMU"}, 
        {symbol : "MMIN"}, 
        {symbol : "FNGO"}, 
        {symbol : "EXXI"}, 
        {symbol : "JPM-A"}, 
        {symbol : "NETE"}, 
        {symbol : "BKN"}, 
        {symbol : "IYM"}, 
        {symbol : "STI"}, 
        {symbol : "CZA"}, 
        {symbol : "PRE-G"}, 
        {symbol : "UFS"}, 
        {symbol : "SZC^"}, 
        {symbol : "APTI"}, 
        {symbol : "INUV"}, 
        {symbol : "RRC"}, 
        {symbol : "GRSHU"}, 
        {symbol : "CVBF"}, 
        {symbol : "TREC"}, 
        {symbol : "PTX"}, 
        {symbol : "HY"}, 
        {symbol : "LONE"}, 
        {symbol : "CJNK"}, 
        {symbol : "UGAZ"}, 
        {symbol : "NSL"}, 
        {symbol : "PKE"}, 
        {symbol : "CI"}, 
        {symbol : "RY-T"}, 
        {symbol : "AFT"}, 
      ]);
    });
};

