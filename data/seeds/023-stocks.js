
exports.seed = function(knex) {
  return knex('stocks')
    .then(function () {
      return knex('stocks').insert([
        {symbol : "LIZI"}, 
        {symbol : "RQI^#"}, 
        {symbol : "MLPB"}, 
        {symbol : "KDFI"}, 
        {symbol : "KYN-F*"}, 
        {symbol : "AMHCW"}, 
        {symbol : "MDIA"}, 
        {symbol : "VVNT+"}, 
        {symbol : "VVNT"}, 
        {symbol : "RQI^"}, 
        {symbol : "ALUS"}, 
        {symbol : "LIVKW"}, 
        {symbol : "CHPM"}, 
        {symbol : "FNGS"}, 
        {symbol : "SAQNW"}, 
        {symbol : "SPSK"}, 
        {symbol : "DVOP"}, 
        {symbol : "SWKH"}, 
        {symbol : "SCVX="}, 
        {symbol : "GHIVU"}, 
        {symbol : "NUSI"}, 
        {symbol : "QGRO"}, 
        {symbol : "EKAR"}, 
        {symbol : "OVF"}, 
        {symbol : "OVV"}, 
        {symbol : "CLSK"}, 
        {symbol : "ROSC"}, 
        {symbol : "CNNB"}, 
        {symbol : "WFC-Z"}, 
        {symbol : "ARR-C"}, 
        {symbol : "BMEZ"}, 
        {symbol : "ANVS"}, 
        {symbol : "TRTN-D"}, 
        {symbol : "ECCA*"}, 
        {symbol : "BDTX"}, 
        {symbol : "ANPC"}, 
        {symbol : "ELAT"}, 
        {symbol : "REYN"}, 
        {symbol : "ONEM"}, 
        {symbol : "ARQT"}, 
        {symbol : "WTRG"}, 
        {symbol : "FHI"}, 
        {symbol : "PGEN"}, 
        {symbol : "OPCH"}, 
        {symbol : "COF-P*"}, 
        {symbol : "JPM-F*"}, 
        {symbol : "DWEQ"}, 
        {symbol : "QMCO"}, 
        {symbol : "CCAP"}, 
        {symbol : "BDCZ"}, 
        {symbol : "HCCO"}, 
        {symbol : "IPV="}, 
        {symbol : "JOYY"}, 
        {symbol : "BSEP"}, 
        {symbol : "COF-J"}, 
        {symbol : "CSPR"}, 
        {symbol : "BFEB"}, 
        {symbol : "PPD"}, 
        {symbol : "BEAM"}, 
        {symbol : "SDGR"}, 
        {symbol : "NREF"}, 
        {symbol : "AMBC+"}, 
        {symbol : "PFHD"}, 
        {symbol : "ONEW"}, 
        {symbol : "PFEB"}, 
        {symbol : "GLU-B"}, 
        {symbol : "ARR-B*"}, 
        {symbol : "UFEB"}, 
        {symbol : "VRT"}, 
        {symbol : "VRT+"}, 
        {symbol : "TAWK"}, 
        {symbol : "CCAC="}, 
        {symbol : "PAE"}, 
        {symbol : "GNRSU"}, 
        {symbol : "SSUS"}, 
        {symbol : "PTACW"}, 
        {symbol : "OSLE*"}, 
        {symbol : "COFS"}, 
        {symbol : "CLPT"}, 
        {symbol : "HUIZ"}, 
        {symbol : "SCPE+"}, 
        {symbol : "HHHHW"}, 
        {symbol : "RPAR"}, 
        {symbol : "PAEWW"}, 
        {symbol : "AGNCP"}, 
        {symbol : "RILYM"}, 
        {symbol : "TFII"}, 
        {symbol : "MEDS"}, 
        {symbol : "RVMD"}, 
        {symbol : "DUOT"}, 
        {symbol : "GRIL"}, 
        {symbol : "MFH"}, 
        {symbol : "ZGYHU"}, 
        {symbol : "STT-C*"}, 
        {symbol : "UCIB"}, 
        {symbol : "VERT="}, 
        {symbol : "NBACU"}, 
        {symbol : "CCXX="}, 
        {symbol : "DCOMP"}, 
        {symbol : "DX-A*"}, 
        {symbol : "MDRRP"}, 
        {symbol : "DWAW"}, 
        {symbol : "HYTR"}, 
        {symbol : "ATCX"}, 
        {symbol : "ALTG"}, 
        {symbol : "XBITV"}, 
        {symbol : "CFR-A*"}, 
        {symbol : "JJM"}, 
        {symbol : "ABEQ"}, 
        {symbol : "ATCXW"}, 
        {symbol : "OVM"}, 
        {symbol : "GSMG"}, 
        {symbol : "HIBL"}, 
        {symbol : "SRAC"}, 
        {symbol : "ESSCU"}, 
        {symbol : "NRZ-C"}, 
        {symbol : "BPYPN"}, 
        {symbol : "GSMGW"}, 
        {symbol : "AMHC"}, 
        {symbol : "T-C"}, 
        {symbol : "DMYT="}, 
        {symbol : "BATL"}, 
        {symbol : "SBSW"}, 
        {symbol : "ZCMD"}, 
        {symbol : "ALTG+"}, 
        {symbol : "OXLCP"}, 
        {symbol : "ACSI"}, 
        {symbol : "GBDV"}, 
        {symbol : "DLY"}, 
        {symbol : "DX-C"}, 
        {symbol : "RNR-C*"}, 
        {symbol : "CIIC"}, 
        {symbol : "NACP"}, 
        {symbol : "IPV"}, 
        {symbol : "MJJ"}, 
        {symbol : "ATCO"}, 
        {symbol : "BEP-A"}, 
        {symbol : "PASG"}, 
        {symbol : "ATCO-H"}, 
        {symbol : "HCCOW"}, 
        {symbol : "BJUN"}, 
        {symbol : "GLIF"}, 
        {symbol : "NRGD"}, 
        {symbol : "ATCO-G"}, 
        {symbol : "ATCO-D"}, 
        {symbol : "ATCO-I"}, 
        {symbol : "BPYU"}, 
        {symbol : "TT"}, 
        {symbol : "BPYUP"}, 
        {symbol : "ATCO-E"}, 
        {symbol : "GFL"}, 
        {symbol : "MJO"}, 
        {symbol : "GFLU"}, 
        {symbol : "DWUS"}, 
        {symbol : "NEE-P"}, 
        {symbol : "FAUG"}, 
        {symbol : "MFA-C"}, 
        {symbol : "PRIF-F"}, 
        {symbol : "PHYL"}, 
        {symbol : "INSUW"}, 
        {symbol : "BFYT"}, 
        {symbol : "GDYN"}, 
        {symbol : "LSACU"}, 
        {symbol : "FEAC="}, 
        {symbol : "BBIN"}, 
        {symbol : "NRGU"}, 
        {symbol : "OBLG"}, 
        {symbol : "GDYNW"}, 
        {symbol : "HDLB"}, 
        {symbol : "HERD"}, 
        {symbol : "AMUB"}, 
        {symbol : "XCOM"}, 
        {symbol : "DFPHU"}, 
        {symbol : "DAUG"}, 
        {symbol : "HEWW"}, 
        {symbol : "FLYT"}, 
        {symbol : "BNKU"}, 
        {symbol : "DFEB"}, 
        {symbol : "FNGZ"}, 
        {symbol : "CHNGV"}, 
        {symbol : "LACK"}, 
        {symbol : "IMRA"}, 
        {symbol : "ARMR"}, 
        {symbol : "FFEB"}, 
        {symbol : "LMLB"}, 
        {symbol : "NRGO"}, 
        {symbol : "PFLD"}, 
        {symbol : "AIKI"}, 
        {symbol : "FCNCP"}, 
        {symbol : "LCR"}, 
        {symbol : "PPDM"}, 
        {symbol : "FLBL"}, 
        {symbol : "MARB"}, 
        {symbol : "QMJ"}, 
        {symbol : "IBTG"}, 
        {symbol : "IBTE"}, 
        {symbol : "QLVE"}, 
        {symbol : "BUYZ"}, 
        {symbol : "RTL"}, 
        {symbol : "MUTE"}, 
        {symbol : "HELX"}, 
        {symbol : "FOVL"}, 
        {symbol : "AWAY"}, 
        {symbol : "NULC"}, 
        {symbol : "NRGZ"},
        {symbol : "IBTD"},
        {symbol : "MCRO"},
        {symbol : "DFNS="},
        {symbol : "IQM"},
        {symbol : "SNUG"},
        {symbol : "TECB"},
        {symbol : "ISG*"},
        {symbol : "MIDF"}
      ]);
    });
};


