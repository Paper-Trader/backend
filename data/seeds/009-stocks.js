
exports.seed = function(knex) {
  return knex('stocks')
    .then(function () {
      return knex('stocks').insert([
        {symbol : "ARDS"}, 
        {symbol : "BOND"}, 
        {symbol : "LL"}, 
        {symbol : "WTRU"}, 
        {symbol : "OZRK"}, 
        {symbol : "CCCL"}, 
        {symbol : "AEG"}, 
        {symbol : "USAP"}, 
        {symbol : "VT"}, 
        {symbol : "TRP"}, 
        {symbol : "RXIIW"}, 
        {symbol : "SFS"}, 
        {symbol : "DFBH"}, 
        {symbol : "BNO"}, 
        {symbol : "CLDX"}, 
        {symbol : "EWRE"}, 
        {symbol : "EBR"}, 
        {symbol : "FTXO"}, 
        {symbol : "SITE"}, 
        {symbol : "RNSC"}, 
        {symbol : "UDOW"}, 
        {symbol : "FBIOP"}, 
        {symbol : "BTI"}, 
        {symbol : "NS-A"}, 
        {symbol : "INB"}, 
        {symbol : "QTS-B"}, 
        {symbol : "LPCN"}, 
        {symbol : "HPT"}, 
        {symbol : "LPT"}, 
        {symbol : "PSA-Y*"}, 
        {symbol : "VIRT"}, 
        {symbol : "RBCN"}, 
        {symbol : "NTRP"}, 
        {symbol : "HYLD"}, 
        {symbol : "ATIF"}, 
        {symbol : "INPX"}, 
        {symbol : "LAIX"}, 
        {symbol : "UVV"}, 
        {symbol : "SHBI"}, 
        {symbol : "MLR"}, 
        {symbol : "BNJ"}, 
        {symbol : "TIBR"}, 
        {symbol : "MPV"}, 
        {symbol : "SHO-F"}, 
        {symbol : "VRTSP"}, 
        {symbol : "DPST"}, 
        {symbol : "LPX"}, 
        {symbol : "MHO"}, 
        {symbol : "GDV"}, 
        {symbol : "TLI"}, 
        {symbol : "KANG"}, 
        {symbol : "EAB"}, 
        {symbol : "CWT"}, 
        {symbol : "KFS"}, 
        {symbol : "IYJ"}, 
        {symbol : "DFVS"}, 
        {symbol : "FNDX"}, 
        {symbol : "QRVO"}, 
        {symbol : "NUDM"}, 
        {symbol : "NORW"}, 
        {symbol : "VBND"}, 
        {symbol : "GIG="}, 
        {symbol : "DWAT"}, 
        {symbol : "MRDN"}, 
        {symbol : "IVOV"}, 
        {symbol : "HCAPZ"}, 
        {symbol : "OXLC"}, 
        {symbol : "MGF"}, 
        {symbol : "GTHX"}, 
        {symbol : "FRD"}, 
        {symbol : "TNP-C"}, 
        {symbol : "EQLT"}, 
        {symbol : "KBLMW"}, 
        {symbol : "SDY"}, 
        {symbol : "VGI"}, 
        {symbol : "IGN"}, 
        {symbol : "SHO"}, 
        {symbol : "DYY"}, 
        {symbol : "WIA"}, 
        {symbol : "OXY"}, 
        {symbol : "HONE"}, 
        {symbol : "MITK"}, 
        {symbol : "GPIC"}, 
        {symbol : "BKJ"}, 
        {symbol : "CCD"}, 
        {symbol : "STNLW"}, 
        {symbol : "USNA"}, 
        {symbol : "MYOV"}, 
        {symbol : "CODI-B"}, 
        {symbol : "JCOM"}, 
        {symbol : "SOXS"}, 
        {symbol : "IDYA"}, 
        {symbol : "SHO-E"}, 
        {symbol : "MNCL"}, 
        {symbol : "CFRX"}, 
        {symbol : "DXB"}, 
        {symbol : "LVHB"}, 
        {symbol : "LUV"}, 
        {symbol : "SUP"}, 
        {symbol : "USB-H"}, 
        {symbol : "ANIP"}, 
        {symbol : "LMFAW"}, 
        {symbol : "ALBO"}, 
        {symbol : "FCNCA"}, 
        {symbol : "DYN-A"}, 
        {symbol : "DNKN"}, 
        {symbol : "ALACW"}, 
        {symbol : "DPHCW"}, 
        {symbol : "BCTF"}, 
        {symbol : "NYNY"}, 
        {symbol : "AGX"}, 
        {symbol : "IMH"}, 
        {symbol : "MMDM"}, 
        {symbol : "MFT"}, 
        {symbol : "ZOM"}, 
        {symbol : "QRTEA"}, 
        {symbol : "LH"}, 
        {symbol : "NUEM"}, 
        {symbol : "CHUBK"}, 
        {symbol : "ASFI"}, 
        {symbol : "ASHS"}, 
        {symbol : "EVLO"}, 
        {symbol : "ALLK"}, 
        {symbol : "CIEN"}, 
        {symbol : "RSYS"}, 
        {symbol : "PRN"}, 
        {symbol : "IVH"}, 
        {symbol : "CTDD"}, 
        {symbol : "APT"}, 
        {symbol : "TBLTU"}, 
        {symbol : "BLW"}, 
        {symbol : "KT"}, 
        {symbol : "AMBC"}, 
        {symbol : "CCU"}, 
        {symbol : "HEWJ"}, 
        {symbol : "DCP-C"}, 
        {symbol : "BORN"}, 
        {symbol : "RUBY"}, 
        {symbol : "SRC-A"}, 
        {symbol : "GSB"}, 
        {symbol : "DHVW"}, 
        {symbol : "EXK"}, 
        {symbol : "PBD"}, 
        {symbol : "IWS"}, 
        {symbol : "WOW"}, 
        {symbol : "RC"}, 
        {symbol : "CSL"}, 
        {symbol : "PJC"}, 
        {symbol : "PSXP"}, 
        {symbol : "STOT"}, 
        {symbol : "MTZ"}, 
        {symbol : "MDYV"}, 
        {symbol : "SOI"}, 
        {symbol : "PSR"}, 
        {symbol : "BCLI"}, 
        {symbol : "CDL"}, 
        {symbol : "PINC"}, 
        {symbol : "TPS"}, 
        {symbol : "MERC"}, 
        {symbol : "TPB"}, 
        {symbol : "HEBT"}, 
        {symbol : "ACRX"}, 
        {symbol : "VNOM"}, 
        {symbol : "RING"}, 
        {symbol : "RPLA="}, 
        {symbol : "CTSH"}, 
        {symbol : "FLNT"}, 
        {symbol : "WSR"}, 
        {symbol : "NMRD"}, 
        {symbol : "SMG"}, 
        {symbol : "PTHN"}, 
        {symbol : "TSE"}, 
        {symbol : "MVO"}, 
        {symbol : "RBS-S"}, 
        {symbol : "CFC-B*"}, 
        {symbol : "MLQD"}, 
        {symbol : "ZG"}, 
        {symbol : "ELEC"}, 
        {symbol : "SEIC"}, 
        {symbol : "EWJ"}, 
        {symbol : "RCA"}, 
        {symbol : "DLR-H*"}, 
        {symbol : "GARS"}, 
        {symbol : "DGICB"}, 
        {symbol : "FRAK"}, 
        {symbol : "VFQY"}, 
        {symbol : "XLY"}, 
        {symbol : "MVIN"}, 
        {symbol : "INTU"}, 
        {symbol : "ROK"}, 
        {symbol : "WINC"}, 
        {symbol : "DFEN"}, 
        {symbol : "EEP"}, 
        {symbol : "KND"}, 
        {symbol : "NEOS"}, 
        {symbol : "CMRE-C"}, 
        {symbol : "COOP"}, 
        {symbol : "FLF"}, 
        {symbol : "MBCN"}, 
        {symbol : "LEO"}, 
        {symbol : "LFUS"}, 
        {symbol : "TSBK"}, 
        {symbol : "ACOR"}, 
        {symbol : "PCG-A"}, 
        {symbol : "HSDT"}, 
        {symbol : "MSUS"}, 
        {symbol : "GCBC"}, 
        {symbol : "EDR"}, 
        {symbol : "ISBC"}, 
        {symbol : "AAT"}, 
        {symbol : "MSA"}, 
        {symbol : "NMK-B"}, 
        {symbol : "FLRT"}, 
        {symbol : "AIG-A"}, 
        {symbol : "KAACW"}, 
        {symbol : "VMIN"}, 
        {symbol : "VXXB"}, 
        {symbol : "TTAI"}, 
        {symbol : "NGHCP"}, 
        {symbol : "KGRN"}, 
        {symbol : "SJB"}, 
        {symbol : "GRSHW"}, 
        {symbol : "IDEX"}, 
        {symbol : "BLH"}, 
        {symbol : "VKI"}, 
        {symbol : "UVSP"}, 
        {symbol : "QRHC"}, 
        {symbol : "DFNL"}, 
        {symbol : "ADK"}, 
        {symbol : "REET"}, 
        {symbol : "TOTAW"}, 
        {symbol : "MBOT"}, 
        {symbol : "TNP-E"}, 
        {symbol : "GAB-D"}, 
        {symbol : "DBE"}, 
        {symbol : "GDXX"}, 
        {symbol : "TAN"}, 
        {symbol : "PHM"}, 
        {symbol : "BNCL"}, 
        {symbol : "LOVE"}, 
        {symbol : "RHE"}, 
        {symbol : "LKQ"}, 
        {symbol : "KIE"}, 
        {symbol : "GMZ"}, 
        {symbol : "SVT"}, 
        {symbol : "WTR"}, 
        {symbol : "EPZM"}, 
        {symbol : "LINU"}, 
        {symbol : "CATO"}, 
        {symbol : "POOL"}, 
        {symbol : "TBBK"}, 
        {symbol : "NYMT"}, 
        {symbol : "BHGE"}, 
        {symbol : "INVA"}, 
        {symbol : "BFR"}, 
        {symbol : "SILC"}, 
        {symbol : "WSTL"}, 
        {symbol : "EVLV"}, 
        {symbol : "CENX"}, 
        {symbol : "INN-D"}, 
        {symbol : "RGLD"}, 
        {symbol : "FFKT"}, 
        {symbol : "CBS.A"}, 
        {symbol : "IQDY"}, 
        {symbol : "PEB-F"}, 
        {symbol : "EMP"}, 
        {symbol : "PBIP"}, 
        {symbol : "BSV"}, 
        {symbol : "UPLD"}, 
        {symbol : "FYT"}, 
        {symbol : "APLS"}, 
        {symbol : "RTK"}, 
        {symbol : "NKSH"}, 
        {symbol : "DXUS"}, 
        {symbol : "ATOM"}, 
        {symbol : "ASR"}, 
        {symbol : "SIFI"}, 
        {symbol : "CAA"}, 
        {symbol : "ERC"}, 
        {symbol : "IBKCP"}, 
        {symbol : "CWH"}, 
        {symbol : "MSGN"}, 
        {symbol : "RETL"}, 
        {symbol : "UWT"}, 
        {symbol : "ACBI"}, 
        {symbol : "IONS"}, 
        {symbol : "WSBC"}, 
        {symbol : "CSIQ"}, 
        {symbol : "RLOG"}, 
        {symbol : "NKE"}, 
        {symbol : "LTSK"}, 
        {symbol : "HTGC"}, 
        {symbol : "AMJL"}, 
        {symbol : "FFSG"}, 
        {symbol : "NDRA"}, 
        {symbol : "USMF"}, 
        {symbol : "IMTM"}, 
        {symbol : "WBC"}, 
        {symbol : "WEA"}, 
        {symbol : "TER"}, 
        {symbol : "ASEA"}, 
        {symbol : "JHMS"}, 
        {symbol : "FAT"}, 
        {symbol : "LPI"}, 
        {symbol : "CRME"}, 
        {symbol : "PLSE"}, 
        {symbol : "CFNB"}, 
        {symbol : "IGBH"}, 
        {symbol : "NSIT"}, 
        {symbol : "IWP"}, 
        {symbol : "DRE"}, 
        {symbol : "FIYY"}, 
        {symbol : "PXLW"}, 
        {symbol : "BAH"}, 
        {symbol : "WSBF"}, 
        {symbol : "HHR"}, 
        {symbol : "TTEK"}, 
        {symbol : "SNV-D"}, 
        {symbol : "SLYG"}, 
        {symbol : "ARNA"}, 
        {symbol : "CBT"}, 
        {symbol : "ESGW"}, 
        {symbol : "BFAM"}, 
        {symbol : "FPAC="}, 
        {symbol : "NEE"}, 
        {symbol : "FLMN"}, 
        {symbol : "AMRI"}, 
        {symbol : "PTLC"}, 
        {symbol : "FISK"}, 
        {symbol : "LAWS"}, 
        {symbol : "FNGU"}, 
        {symbol : "FUMB"}, 
        {symbol : "HLT"}, 
        {symbol : "LFEQ"}, 
        {symbol : "NGHC"}, 
        {symbol : "NSM"}, 
        {symbol : "WDC"}, 
        {symbol : "VIGI"}, 
        {symbol : "SEEL"}, 
        {symbol : "XCEM"}, 
        {symbol : "TRU"}, 
        {symbol : "SHSP"}, 
        {symbol : "MTOR"}, 
        {symbol : "MTFB"}, 
        {symbol : "VERB"}, 
        {symbol : "FDIS"}, 
        {symbol : "NSPR"}, 
        {symbol : "C-K"}, 
        {symbol : "EVBN"}, 
        {symbol : "TPGH="}, 
        {symbol : "KMPR"}, 
        {symbol : "JPLS"}, 
        {symbol : "MT"}, 
        {symbol : "SCE-J"}, 
        {symbol : "ESGE"}, 
        {symbol : "UNL"}, 
        {symbol : "TPL"}, 
        {symbol : "TWST"}, 
        {symbol : "SCIN"}, 
        {symbol : "MUST"}, 
        {symbol : "IPOS"}, 
        {symbol : "SBBC"}, 
        {symbol : "VSLR"}, 
        {symbol : "HTLD"}, 
        {symbol : "TREX"}, 
        {symbol : "HTGM"}, 
        {symbol : "STI-E"}, 
        {symbol : "FNKO"}, 
        {symbol : "MA"}, 
        {symbol : "LCUT"}, 
        {symbol : "EAF"}, 
        {symbol : "AGEN"}, 
        {symbol : "ETJ"}, 
        {symbol : "YOGA"}, 
        {symbol : "STAG-B*"}, 
        {symbol : "UQM"}, 
        {symbol : "EWO"}, 
        {symbol : "TDA"}, 
        {symbol : "AHPI"}, 
        {symbol : "DTUS"}, 
        {symbol : "WTFC"}, 
        {symbol : "CCF"}, 
        {symbol : "VNQ"}, 
        {symbol : "FNDF"}, 
        {symbol : "AON"}, 
        {symbol : "GSIE"}, 
        {symbol : "NIE"}, 
        {symbol : "HSNI"}, 
        {symbol : "SOV-C*"}, 
        {symbol : "DLBS"}, 
        {symbol : "HVT"}, 
        {symbol : "SSTK"}, 
        {symbol : "INSM"}, 
        {symbol : "DD#"}, 
        {symbol : "PNFP"}, 
        {symbol : "BCBP"}, 
        {symbol : "PCSB"}, 
        {symbol : "GNUS"}, 
        {symbol : "AGN"}, 
        {symbol : "RLGT-A"}, 
        {symbol : "IDX"}, 
        {symbol : "CINF"}, 
        {symbol : "IQI"}, 
        {symbol : "GMLP"}, 
        {symbol : "ZSAN"}, 
        {symbol : "EFX"}, 
        {symbol : "COH"}, 
        {symbol : "PRIF-B"}, 
        {symbol : "XIN"}, 
        {symbol : "ACA"}, 
        {symbol : "COGT"}, 
        {symbol : "VYMI"}, 
        {symbol : "STAY"}, 
        {symbol : "JPM-H"}, 
        {symbol : "SCE-K"}, 
        {symbol : "RDWR"}, 
        {symbol : "AJXA"}, 
        {symbol : "FPAYW"}, 
        {symbol : "NUW"}, 
        {symbol : "STND"}, 
        {symbol : "AGS"}, 
        {symbol : "REGL"}, 
        {symbol : "FNG"}, 
        {symbol : "SDOW"}, 
        {symbol : "DGRE"}, 
        {symbol : "IPDN"}, 
        {symbol : "NBTB"}, 
        {symbol : "WST"}, 
        {symbol : "AHT-I"}, 
        {symbol : "JBHT"}, 
        {symbol : "JJSF"}, 
        {symbol : "WMB"}, 
        {symbol : "ZF"}, 
        {symbol : "SCHW-D"}, 
        {symbol : "ADRD"}, 
        {symbol : "NFG"}, 
        {symbol : "SAFE"}, 
        {symbol : "TIVO"}, 
        {symbol : "EMLC"}, 
        {symbol : "MCHP"}, 
        {symbol : "JMUB"}, 
        {symbol : "EMHY"}, 
        {symbol : "SPSM"}, 
        {symbol : "RWLS"}, 
        {symbol : "NAN"}, 
        {symbol : "CFXA"}, 
        {symbol : "VNE#"}, 
        {symbol : "CALI"}, 
        {symbol : "QCAN"}, 
        {symbol : "HEWI"}, 
        {symbol : "SGOC"}, 
        {symbol : "YESR"}, 
        {symbol : "DOTAR"}, 
        {symbol : "DXYN"}, 
        {symbol : "LMFA"}, 
        {symbol : "CABO"}, 
        {symbol : "SSW-D"}, 
        {symbol : "EMJ"}, 
        {symbol : "PZG"}, 
        {symbol : "DTYS"}, 
        {symbol : "AXL"}, 
        {symbol : "BOE"}, 
        {symbol : "CAR"}, 
        {symbol : "OTIC"}, 
        {symbol : "SMP"}, 
        {symbol : "TEAF"}, 
        {symbol : "PDCE"}, 
        {symbol : "RALS"}, 
        {symbol : "PEX"}, 
        {symbol : "NHS"}, 
        {symbol : "OUT"}, 
        {symbol : "PCG-B"}, 
        {symbol : "PM"}, 
        {symbol : "IEF"}, 
        {symbol : "POCT"}, 
        {symbol : "PBR"}, 
        {symbol : "KTOVW"}, 
        {symbol : "BML-J"}, 
        {symbol : "EQS"}, 
        {symbol : "BOM"}, 
        {symbol : "GM+B"}, 
        {symbol : "RAS-B"}, 
        {symbol : "GAB"}, 
        {symbol : "WLK"}, 
        {symbol : "FMC"}, 
        {symbol : "ANH-B"}, 
        {symbol : "ACT"}, 
        {symbol : "FXN"}, 
        {symbol : "CMO"}, 
        {symbol : "VR-A*"}, 
        {symbol : "TBX"}, 
        {symbol : "FENY"}, 
        {symbol : "SF"}, 
        {symbol : "BYND"}, 
        {symbol : "YCL"}, 
        {symbol : "ROL"}, 
        {symbol : "ALCO"}, 
        {symbol : "TIGR"}, 
        {symbol : "FTCS"}, 
        {symbol : "WAC"}, 
      ]);
    });
};


