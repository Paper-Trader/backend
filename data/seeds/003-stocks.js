
exports.seed = function(knex) {
  return knex('stocks')
    .then(function () {
      return knex('stocks').insert([
        {symbol : "SIL"}, 
        {symbol : "DAVE"}, 
        {symbol : "OGCP"}, 
        {symbol : "CNST"}, 
        {symbol : "GDJJ"}, 
        {symbol : "RELV"}, 
        {symbol : "INDUU"}, 
        {symbol : "FTF^"}, 
        {symbol : "CRBN"}, 
        {symbol : "MSBF"}, 
        {symbol : "TAPR"}, 
        {symbol : "PXMV"}, 
        {symbol : "CERN"}, 
        {symbol : "CCB"}, 
        {symbol : "EMXC"}, 
        {symbol : "PACD"}, 
        {symbol : "JCAP"}, 
        {symbol : "XERS"}, 
        {symbol : "OIH"}, 
        {symbol : "KEYS"}, 
        {symbol : "PTH"}, 
        {symbol : "CQQQ"}, 
        {symbol : "LLL"}, 
        {symbol : "GTX#"}, 
        {symbol : "VPV"}, 
        {symbol : "NLS"}, 
        {symbol : "GRI"}, 
        {symbol : "VONV"}, 
        {symbol : "AMG"}, 
        {symbol : "MTRX"}, 
        {symbol : "BXE"}, 
        {symbol : "ABAX"}, 
        {symbol : "RT"}, 
        {symbol : "AST+"}, 
        {symbol : "AFI"}, 
        {symbol : "FXL"}, 
        {symbol : "SUMR"}, 
        {symbol : "ALYA"}, 
        {symbol : "VCRA"}, 
        {symbol : "NBIX"}, 
        {symbol : "ALTS"}, 
        {symbol : "TCDA"}, 
        {symbol : "IBUY"}, 
        {symbol : "DECK"}, 
        {symbol : "JACK"}, 
        {symbol : "GURE"}, 
        {symbol : "UFAB"}, 
        {symbol : "MH-A"}, 
        {symbol : "EOLS"}, 
        {symbol : "ASHR"}, 
        {symbol : "IBCP"}, 
        {symbol : "JQUA"}, 
        {symbol : "LEE"}, 
        {symbol : "CATH"}, 
        {symbol : "GDDY"}, 
        {symbol : "GPRO"}, 
        {symbol : "CSWC"}, 
        {symbol : "FITB"}, 
        {symbol : "ACV"}, 
        {symbol : "MEET"}, 
        {symbol : "CNTY"}, 
        {symbol : "APEN"}, 
        {symbol : "ECYT"}, 
        {symbol : "NEM"}, 
        {symbol : "GLOB"}, 
        {symbol : "CIGI"}, 
        {symbol : "AFSI-D"}, 
        {symbol : "PAVMZ"}, 
        {symbol : "USOD"}, 
        {symbol : "AGIO"}, 
        {symbol : "IOO"}, 
        {symbol : "FLKR"}, 
        {symbol : "IIGV"}, 
        {symbol : "FBP"}, 
        {symbol : "LYB"}, 
        {symbol : "AUTL"}, 
        {symbol : "TIER"}, 
        {symbol : "PENN"}, 
        {symbol : "FXE"}, 
        {symbol : "RDUS"}, 
        {symbol : "PACB"}, 
        {symbol : "IIJI"}, 
        {symbol : "FXI"}, 
        {symbol : "USRT"}, 
        {symbol : "HCAC"}, 
        {symbol : "AGU"}, 
        {symbol : "MPW"}, 
        {symbol : "IEMG"}, 
        {symbol : "EVN"}, 
        {symbol : "PZZA"}, 
        {symbol : "RETA"}, 
        {symbol : "EYLD"}, 
        {symbol : "ESND"}, 
        {symbol : "GS-K"}, 
        {symbol : "EMBU"}, 
        {symbol : "PPA"}, 
        {symbol : "IVAL"}, 
        {symbol : "NVTA"}, 
        {symbol : "NPTN"}, 
        {symbol : "MINDP"}, 
        {symbol : "OSPRW"}, 
        {symbol : "ERH"}, 
        {symbol : "YLD"}, 
        {symbol : "ALL-E"}, 
        {symbol : "FONE"}, 
        {symbol : "WCHN"}, 
        {symbol : "GSBC"}, 
        {symbol : "GLU^"}, 
        {symbol : "TATT"}, 
        {symbol : "FGBI"}, 
        {symbol : "UUUU"}, 
        {symbol : "FNBG"}, 
        {symbol : "WMW"}, 
        {symbol : "TUZ"}, 
        {symbol : "MNRL"}, 
        {symbol : "SLDD"}, 
        {symbol : "NQP"}, 
        {symbol : "CHI"}, 
        {symbol : "HPS"}, 
        {symbol : "CHIR"}, 
        {symbol : "SBUX"}, 
        {symbol : "IAU"}, 
        {symbol : "ES"}, 
        {symbol : "NGL"}, 
        {symbol : "KNSA"}, 
        {symbol : "APTX"}, 
        {symbol : "VRA"}, 
        {symbol : "NICK"}, 
        {symbol : "PRSS"}, 
        {symbol : "BRAC"}, 
        {symbol : "CPLG"}, 
        {symbol : "KEY-K"}, 
        {symbol : "FWDB"}, 
        {symbol : "MSCI"}, 
        {symbol : "TU"}, 
        {symbol : "CETXW"}, 
        {symbol : "ATXI"}, 
        {symbol : "BF.B"}, 
        {symbol : "ETY"}, 
        {symbol : "HMNY"}, 
        {symbol : "STDY"}, 
        {symbol : "RDIB"}, 
        {symbol : "SPG"}, 
        {symbol : "SKYW"}, 
        {symbol : "PPSI"}, 
        {symbol : "MDP"}, 
        {symbol : "GRU"}, 
        {symbol : "DVMT"}, 
        {symbol : "CAPE"}, 
        {symbol : "NIM"}, 
        {symbol : "AIMT"}, 
        {symbol : "SILK"}, 
        {symbol : "PTE"}, 
        {symbol : "MDB"}, 
        {symbol : "LOGC"}, 
        {symbol : "GLDW"}, 
        {symbol : "URTY"}, 
        {symbol : "ARCT"}, 
        {symbol : "AKG"}, 
        {symbol : "PVAC"}, 
        {symbol : "IDXX"}, 
        {symbol : "UNMA"}, 
        {symbol : "INO"}, 
        {symbol : "DHT"}, 
        {symbol : "BSRR"}, 
        {symbol : "NSYS"}, 
        {symbol : "INDB"}, 
        {symbol : "AHT-H"}, 
        {symbol : "VKTXW"}, 
        {symbol : "IHIT"}, 
        {symbol : "FFTY"}, 
        {symbol : "AFGH"}, 
        {symbol : "VKTX"}, 
        {symbol : "FKO"}, 
        {symbol : "XSPL"}, 
        {symbol : "TRMT"}, 
        {symbol : "LVHI"}, 
        {symbol : "ASB"}, 
        {symbol : "COUP"}, 
        {symbol : "GDV-A"}, 
        {symbol : "HZO"}, 
        {symbol : "RUSL"}, 
        {symbol : "JMST"}, 
        {symbol : "ETP-E"}, 
        {symbol : "IVR-C"}, 
        {symbol : "ABE"}, 
        {symbol : "FSNN"}, 
        {symbol : "XPO"}, 
        {symbol : "XSD"}, 
        {symbol : "MDY"}, 
        {symbol : "WRK"}, 
        {symbol : "AVB"}, 
        {symbol : "EXPD"}, 
        {symbol : "CTK"}, 
        {symbol : "INMB"}, 
        {symbol : "XTLB"}, 
        {symbol : "IDSA"}, 
        {symbol : "HSII"}, 
        {symbol : "FCBP"}, 
        {symbol : "BX"}, 
        {symbol : "IEI"}, 
        {symbol : "FII"}, 
        {symbol : "MMM"}, 
        {symbol : "BSCM"}, 
        {symbol : "NTIP"}, 
        {symbol : "TRPX"}, 
        {symbol : "HWCPL"}, 
        {symbol : "OR"}, 
        {symbol : "ULTI"}, 
        {symbol : "USM"}, 
        {symbol : "H"}, 
        {symbol : "GSBD"}, 
        {symbol : "TLGT"}, 
        {symbol : "MLNK"}, 
        {symbol : "YCBD"}, 
        {symbol : "D"}, 
        {symbol : "RBPAA"}, 
        {symbol : "VLY-A"}, 
        {symbol : "MIME"}, 
        {symbol : "BEN"}, 
        {symbol : "PSMM"}, 
        {symbol : "LEA"}, 
        {symbol : "INS"}, 
        {symbol : "ESTR"}, 
        {symbol : "AZO"}, 
        {symbol : "IGSB"}, 
        {symbol : "IBDN"}, 
        {symbol : "COCP"}, 
        {symbol : "HYRE"}, 
        {symbol : "RWGE="}, 
        {symbol : "RSG"}, 
        {symbol : "BIBL"}, 
        {symbol : "SEAC"}, 
        {symbol : "HECO"}, 
        {symbol : "GBF"}, 
        {symbol : "IRWD"}, 
        {symbol : "SWP"}, 
        {symbol : "CNBKA"}, 
        {symbol : "VIDI"}, 
        {symbol : "FRO"}, 
        {symbol : "IBND"}, 
        {symbol : "CDC"}, 
        {symbol : "FOCS"}, 
        {symbol : "SCHC"}, 
        {symbol : "YINN"}, 
        {symbol : "MANU"}, 
        {symbol : "UFO"}, 
        {symbol : "TENX"}, 
        {symbol : "XLC"}, 
        {symbol : "BLDP"}, 
        {symbol : "VIG"}, 
        {symbol : "ORLY"}, 
        {symbol : "MACQU"}, 
        {symbol : "PYDS"}, 
        {symbol : "FDT"}, 
        {symbol : "CRAI"}, 
        {symbol : "ISSC"}, 
        {symbol : "SRRA"}, 
        {symbol : "DOD"}, 
        {symbol : "IEA"}, 
        {symbol : "SPTN"}, 
        {symbol : "DXC#"}, 
        {symbol : "EW"}, 
        {symbol : "PODD"}, 
        {symbol : "CFX"}, 
        {symbol : "PYPL"}, 
        {symbol : "RHP"}, 
        {symbol : "AEK"}, 
        {symbol : "PIM"}, 
        {symbol : "CAAP"}, 
        {symbol : "BLK"}, 
        {symbol : "ESGRO"}, 
        {symbol : "GASX"}, 
        {symbol : "PHCF"}, 
        {symbol : "WTS"}, 
        {symbol : "WK"}, 
        {symbol : "AEMD"}, 
        {symbol : "ALACU"}, 
        {symbol : "TWO"}, 
        {symbol : "NE"}, 
        {symbol : "PBP"}, 
        {symbol : "FGM"}, 
        {symbol : "XCO"}, 
        {symbol : "NAVI"}, 
        {symbol : "RUHN"}, 
        {symbol : "XEC"}, 
        {symbol : "TBLT"}, 
        {symbol : "INVH"}, 
        {symbol : "AUO"}, 
        {symbol : "DUK-A"}, 
        {symbol : "JAGX"}, 
        {symbol : "HDEF"}, 
        {symbol : "SHLM"}, 
        {symbol : "GD"}, 
        {symbol : "SMHI"}, 
        {symbol : "FSC"}, 
        {symbol : "USIG"}, 
        {symbol : "SLNO"}, 
        {symbol : "SGOL"}, 
        {symbol : "VNE"}, 
        {symbol : "FCF"}, 
        {symbol : "NBB"}, 
        {symbol : "ETH"}, 
        {symbol : "BOOT"}, 
        {symbol : "CLDB"}, 
        {symbol : "EWCO"}, 
        {symbol : "YANG"}, 
        {symbol : "ADMP"}, 
        {symbol : "LGIH"}, 
        {symbol : "FTSI"}, 
        {symbol : "VEU"}, 
        {symbol : "GSAH"}, 
        {symbol : "SBBP"}, 
        {symbol : "JJS"}, 
        {symbol : "HEQ"}, 
        {symbol : "SHLX"}, 
        {symbol : "CLIR"}, 
        {symbol : "HDP"}, 
        {symbol : "TOTL"}, 
        {symbol : "FTACU"}, 
        {symbol : "ESDI"}, 
        {symbol : "GDVD"}, 
        {symbol : "OXBRW"}, 
        {symbol : "PBCTP"}, 
        {symbol : "CCI"}, 
        {symbol : "CHK-D"}, 
        {symbol : "SMHB"}, 
        {symbol : "ATRC"}, 
        {symbol : "CBTX"}, 
        {symbol : "SUSA"}, 
        {symbol : "BIP"}, 
        {symbol : "AEHR"}, 
        {symbol : "CUBI-F"}, 
        {symbol : "NAV-D"}, 
        {symbol : "DZZ"}, 
        {symbol : "MAA"}, 
        {symbol : "CVV"}, 
        {symbol : "VAR"}, 
        {symbol : "GSOL"}, 
        {symbol : "GILT"}, 
        {symbol : "IBB"}, 
        {symbol : "AEK*"}, 
        {symbol : "VVR"}, 
        {symbol : "MAV"}, 
        {symbol : "CPE"}, 
        {symbol : "SECO"}, 
        {symbol : "HAFC"}, 
        {symbol : "QWLD"}, 
        {symbol : "LYG"}, 
        {symbol : "NSTG"}, 
        {symbol : "SEII"}, 
        {symbol : "ACHV"}, 
        {symbol : "NMCI"}, 
        {symbol : "MSFT"}, 
        {symbol : "CHY"}, 
        {symbol : "PXD"}, 
        {symbol : "DEX"}, 
        {symbol : "VRAY"}, 
        {symbol : "EAGG"}, 
        {symbol : "LNT"}, 
        {symbol : "LSBK"}, 
        {symbol : "BFIT"}, 
        {symbol : "USLB"}, 
        {symbol : "LFAC"}, 
        {symbol : "PVT="}, 
        {symbol : "DOGZ"}, 
        {symbol : "MCN"}, 
        {symbol : "VLRS"}, 
        {symbol : "COF"}, 
        {symbol : "FH"}, 
        {symbol : "CSQ"}, 
        {symbol : "SITC-J"}, 
        {symbol : "GLACW"}, 
        {symbol : "DFBHU"}, 
        {symbol : "NVLN"}, 
        {symbol : "CEA"}, 
        {symbol : "CR"}, 
        {symbol : "HJLI"}, 
        {symbol : "NTIC"}, 
        {symbol : "EPU"}, 
        {symbol : "UMPQ"}, 
        {symbol : "AREX"}, 
        {symbol : "ETRN#"}, 
        {symbol : "VKQ"}, 
        {symbol : "IBTX"}, 
        {symbol : "BOSC"}, 
        {symbol : "CARO"}, 
        {symbol : "UTES"}, 
        {symbol : "BPMP"}, 
        {symbol : "EMMF"}, 
        {symbol : "PBF"}, 
        {symbol : "TKKS"}, 
        {symbol : "MKC.V"}, 
        {symbol : "FRSX"}, 
        {symbol : "PSA-Z"}, 
        {symbol : "CWI"}, 
        {symbol : "FIHD"}, 
        {symbol : "BTX"}, 
        {symbol : "PFFA"}, 
        {symbol : "ARGO"}, 
        {symbol : "AIHS"}, 
        {symbol : "UONEK"}, 
        {symbol : "PRPH"}, 
        {symbol : "ELU"}, 
        {symbol : "CHKP"}, 
        {symbol : "CTRL"}, 
        {symbol : "HRTG"}, 
        {symbol : "OMOM"}, 
        {symbol : "OGEN"}, 
        {symbol : "DIAL"}, 
        {symbol : "CHAC="}, 
        {symbol : "INTL"}, 
        {symbol : "WEX"}, 
        {symbol : "LOGI"}, 
        {symbol : "ARD"}, 
        {symbol : "AEM"}, 
        {symbol : "TGP-B"}, 
        {symbol : "BKD"}, 
        {symbol : "GCC"}, 
        {symbol : "TGT"}, 
        {symbol : "HILO"}, 
        {symbol : "HFWA"}, 
        {symbol : "AIB"}, 
        {symbol : "MSG"}, 
        {symbol : "EOCC"}, 
        {symbol : "BBL"}, 
        {symbol : "JYNT"}, 
        {symbol : "PAWZ"}, 
        {symbol : "NDRAW"}, 
        {symbol : "CETV"}, 
        {symbol : "LBRT"}, 
        {symbol : "VRNA"}, 
        {symbol : "USB-A"}, 
        {symbol : "CHAU"}, 
        {symbol : "AGO-F"}, 
        {symbol : "COWN"}, 
        {symbol : "TRQ"}, 
        {symbol : "W"}, 
        {symbol : "AGGE"}, 
        {symbol : "WWD"}, 
        {symbol : "IGRO"}, 
        {symbol : "TXRH"}, 
        {symbol : "NGHCN"}, 
        {symbol : "ESQ"}, 
        {symbol : "ARCC"}, 
        {symbol : "HDAW"}, 
        {symbol : "ARMP"}, 
        {symbol : "GWPH"}, 
        {symbol : "HCHC"}, 
        {symbol : "BSJI"}, 
        {symbol : "FSK"}, 
        {symbol : "DBGR"}, 
        {symbol : "SDP"}, 
        {symbol : "TS"}, 
        {symbol : "CEPU"}, 
        {symbol : "XPL"}, 
        {symbol : "GNOM"}, 
        {symbol : "ACES"}, 
        {symbol : "AEYE"}, 
        {symbol : "BLDR"}, 
        {symbol : "TGLS"}, 
        {symbol : "SCPB"}, 
        {symbol : "SHG"}, 
        {symbol : "CFG-D"}, 
        {symbol : "SFBC"}, 
        {symbol : "TWO-D"}, 
        {symbol : "FTR"}, 
        {symbol : "GBLIL"}, 
        {symbol : "CSX"}, 
        {symbol : "GDO"}, 
        {symbol : "MEC"}, 
        {symbol : "HALO"}, 
        {symbol : "PEGA"}, 
        {symbol : "TDTF"}, 
        {symbol : "EML"}, 
        {symbol : "LYL"}, 
        {symbol : "ALDR"}, 
        {symbol : "LACQU"}, 
        {symbol : "CNACR"}, 
        {symbol : "DL"}, 
        {symbol : "ISZE"}, 
        {symbol : "ODFL"}, 
        {symbol : "BGY"}, 
        {symbol : "BSM"}, 
        {symbol : "UEPS"}, 
        {symbol : "DGRW"}, 
        {symbol : "WRTC"}, 
        {symbol : "NOW"}, 
        {symbol : "AGO-E"}, 
        {symbol : "DBI"}, 
        {symbol : "MVC"}, 
        {symbol : "ATNX"}, 
        {symbol : "RYJ"}, 
        {symbol : "BBY"}, 
        {symbol : "ENR"}, 
        {symbol : "OLP"}, 
        {symbol : "FMBI"}, 
        {symbol : "IRL"}, 
        {symbol : "JHMC"}, 
        {symbol : "OVLY"}, 
      ]);
    });
};


