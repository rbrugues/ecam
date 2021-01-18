/* ESTIMATIONS: INPUTS WITH EQUATIONS ASSOCIATED*/
//maybe they can be moved inside the Ecam global class for consistency TODO
let Estimations={
  //emission factors for grid electricity
    wsa_conv_kwh(stage){return Global.General.conv_kwh_co2},
    wst_conv_kwh(stage){return Global.General.conv_kwh_co2},
    wsd_conv_kwh(stage){return Global.General.conv_kwh_co2},
    wwc_conv_kwh(stage){return Global.General.conv_kwh_co2},
    wwt_conv_kwh(stage){return Global.General.conv_kwh_co2},
    wwo_conv_kwh(stage){return Global.General.conv_kwh_co2},

  //ww
    //ww: 200L person per day
    ww_vol_gene(stage){return 0.2*stage.ww_resi_pop*Global.Days();},

  //wwc
    wwc_vol_coll(substage){return 0.2*substage.wwc_conn_pop*Global.Days();},
    wwc_vol_coll_tre(substage){return substage.wwc_vol_coll - substage.wwc_vol_coll_unt;},
    wwc_vol_coll_unt(substage){return substage.wwc_vol_coll - substage.wwc_vol_coll_tre;},

    wwc_tn(substage){
      let Protein    = Global.General.prot_con; //kg protein/person/year
      let P          = substage.wwc_conn_pop; //population
      let Years      = Global.Years(); //years
      let F_NPR      = Cts.ct_fra_np.value;
      let N_HH       = Cts.ct_N_HH.value;
      let F_NON_CON  = Cts.ct_fac_nc.value;
      let F_IND_COM  = Cts.ct_fac_ic.value;
      return Protein * P * Years * F_NPR * N_HH * F_NON_CON * F_IND_COM; //kg
    },
    wwc_bod(substage){
      let P   = substage.wwc_conn_pop; //population
      let BOD = Global.General.bod_pday; //g/person/day
      return P * BOD * 0.001 * Global.Days(); //kg
    },

  //wwt
    wwt_vol_trea(substage){return 0.2*substage.wwt_serv_pop*Global.Days();},
    wwt_vol_disc(substage){return substage.wwt_vol_trea - substage.wwt_vol_nonp;},
    wwt_tn_infl(substage){
      let Protein    = Global.General.prot_con; //kg protein/person/year
      let P          = substage.wwt_serv_pop; //population served
      let Years      = Global.Years(); //years
      let F_NPR      = Cts.ct_fra_np.value;
      let N_HH       = Cts.ct_N_HH.value;
      let F_NON_CON  = Cts.ct_fac_nc.value;
      let F_IND_COM  = Cts.ct_fac_ic.value;
      return Protein * P * Years * F_NPR * N_HH * F_NON_CON * F_IND_COM;
    },

    wwt_slu_lf_TVS(substage){
      let slu_disp=Tables.get_row('Type of sludge disposed',substage.wwt_slu_disp);
      return slu_disp.TVS*100;
    },
    wwt_slu_la_N_cont(substage){
      let slu_disp=Tables.get_row('Type of sludge disposed',substage.wwt_slu_disp);
      return slu_disp.la_N_cont;
    },
    wwt_slu_lf_N_cont(substage){
      let slu_disp=Tables.get_row('Type of sludge disposed',substage.wwt_slu_disp);
      return slu_disp.la_N_cont;
    },

    //estimation for biogas produced
    wwt_biog_pro(substage){
      let wwt_mass_slu         = substage.wwt_mass_slu;               //kg | mass of combined sludge to digestion
      let VS_to_digestion      = wwt_mass_slu * 0.80;                 //kg | VS to digestion: 80% of sludge mass
      let VS_destroyed         = VS_to_digestion * 0.60;              //kg | VS destroyed: 60% of VS
      let digested_sludge_mass = wwt_mass_slu - VS_destroyed;         //kg | mass of digested sludge
      let biogas_mass          = wwt_mass_slu - digested_sludge_mass; //kg | biogas produced
      return biogas_mass;
    },

    wwt_bod_infl(substage){
      let P   = substage.wwt_serv_pop; //population
      let BOD = Global.General.bod_pday; //g/person/day
      return P * BOD * 0.001 * Global.Days(); //kg
    },

  //wwo
    wwo_prot_con(substage){
      let population = substage.wwo_open_pop; //people
      let years      = Global.Years(); //years
      let protein    = Global.General.prot_con; //kg/person/year
      return population*protein*years; //kg
    },

    wwo_vol_unco(substage){
      return 0.2*substage.wwo_onsi_pop*Global.Days();
    },
    //0.3kg/person/day
    wwo_fslu_emp(substage){
      return 0.3 * substage.wwo_onsi_pop * Global.Days()/substage.wwo_fdensity * substage.wwo_cont_emp/100;
    },
  //wwo
    wwo_bod_infl(substage){
      let P   = substage.wwo_onsi_pop; //population
      let BOD = Global.General.bod_pday; //g/person/day
      return P * BOD * 0.001 * Global.Days(); //kg
    },

    wwo_n2o_efac_opd(substage){
      return Cts.ct_ef_eff.value;
    },
  /*
  wwo_fslu_emp(){ return Cts.ct_fs_prod.value*Global.Waste.Collection.wwo_onsi_pop*Global.Days()/Global.Waste.Collection.wwo_fdensity*Global.Faecl.Containment.wwo_cont_emp/100; },
  wwo_bod_rmvd(){ return Global.Faecl.Containment.wwo_fslu_emp*Global.Faecl.Containment.wwo_bod_conc_fs; },

  //fst
  //influent and effluent BOD
  fst_bod_infl(){ return Global.Faecl.Containment.wwo_bod_rmvd; },
  fst_bod_effl(){ return 0.10*Global.Faecl.Treatment.fst_bod_infl; },
  //biogas
  fst_biog_pro(){return Global.Faecl.Treatment.fst_bod_infl*Cts.ct_bod_kg.value*Cts.ct_biog_g.value;},
  fst_ch4_biog(){return 59; },

  //fsr
  //volume dumped
  fsr_vol_dumping(){return Global.Faecl.Containment.wwo_fslu_emp},
  //mass sent to landapp
  fsr_mass_landapp(){
    let fslu_typ_la=Tables.find('fsr_fslu_typ_la',Global.Faecl.Reuse.fsr_fslu_typ_la);
    let total_solids=Tables.fsr_fslu_typ_la[fslu_typ_la].total_solids;
    return Global.Faecl.Containment.wwo_fslu_emp*Global.Faecl.Containment.wwo_fdensity*total_solids;
  },
  //mass sent to landfilling
  fsr_mass_landfil(){
    let fslu_typ_lf=Tables.find('fsr_fslu_typ_lf',Global.Faecl.Reuse.fsr_fslu_typ_lf);
    let total_solids=Tables.fsr_fslu_typ_lf[fslu_typ_lf].total_solids;
    return Global.Faecl.Containment.wwo_fslu_emp*Global.Faecl.Containment.wwo_fdensity*total_solids;
  },
  //N content of FS
  fsr_la_N_cont(){
    let fslu_typ=Tables.find('fsr_fslu_typ_la',Global.Faecl.Reuse.fsr_fslu_typ_la);
    return Tables.fsr_fslu_typ_la[fslu_typ].N_content;
  },
  //N content of FS
  fsr_lf_N_cont(){
    let fslu_typ=Tables.find('fsr_fslu_typ_lf',Global.Faecl.Reuse.fsr_fslu_typ_lf);
    return Tables.fsr_fslu_typ_lf[fslu_typ].N_content;
  },
  //TVS content of FS
  fsr_lf_TVS(){
    let fslu_typ=Tables.find('fsr_fslu_typ_lf',Global.Faecl.Reuse.fsr_fslu_typ_lf);
    return 100*Tables.fsr_fslu_typ_lf[fslu_typ].TVS;
  },
  */
};
