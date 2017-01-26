/**
	Codes of variables that are hidden if answer is NO

	Question object structure: 
		1. "variables" (array)      variables hidden if answer is no
		2. "advanced" (boolean)     show only in substages
		3. "otherQuestions" (array) questions hidden if answer is no
	
	Template:
	"newQuestion":{
		variables:[ 
			"",
		],
		advanced:0,
		otherQuestions:[
			"",
		],
	},
*/
var Questions = {
	"wsa_pumping":{
		variables:[ 
			"wsa_vol_pump",
			"wsa_nrg_pump",
			"wsa_nrg_per_pmp_watr",
		],
		advanced:0,
		otherQuestions:[
			"wsa_pumping_efficiency",
		],
	},
	"wsa_engines":{
		variables:[
			"wsa_fuel_typ",
			"wsa_vol_fuel",
			"wsa_KPI_GHG_ne",
		],
		advanced:0,
		otherQuestions:[],
	},
	"wsa_pumping_efficiency":{
		variables:[
			"wsa_pmp_head",
			"wsa_main_len",
			"wsa_fri_loss",
			"wsa_KPI_un_head_loss",
			"wsa_KPI_std_nrg_cons",
			"wsa_KPI_std_elec_eff",
			"wsa_pmp_type",
			"wsa_pmp_size",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wsa_producing_energy":{
		variables:[
			"wsa_nrg_turb",
			"wsa_KPI_nrg_recovery",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wst_engines":{
		variables:[
			"wst_fuel_typ",
			"wst_vol_fuel",
			"wst_KPI_GHG_fuel",
		],
		advanced:0,
		otherQuestions:[],
	},
	"wst_pumping_efficiency":{
		variables:[ 
			"wst_vol_pump",
			"wst_pmp_head",
			"wst_KPI_std_nrg_cons",
			"wst_nrg_pump",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wst_treatment_performance":{
		variables:[ 
			"wst_turb_raw",
			"wst_turb_fin",
			"wst_nrg_disn",
			"wst_KPI_nrg_disnfc",
			"wst_KPI_slu_per_m3",
			"wst_mass_slu",
			"wst_KPI_slu_per_m3",
			"wst_disnfctn",
		],
		advanced:1,
		otherQuestions:[ ],
	},

	//wsd
	"wsd_pumping":{
		variables:[
			"wsd_vol_pump",
			"wsd_nrg_pump",
			"wsd_KPI_nrg_per_m3",
			"wsd_pmp_head",
		],
		advanced:0,
		otherQuestions:[
			"wsd_pumping_efficiency",
		],
	},
	"wsd_engines":{
		variables:[
			"wsd_fuel_typ",
			"wsd_vol_fuel",
			"wsd_KPI_GHG_ne_fuel",
		],
		advanced:0,
		otherQuestions:[],
	},
	"wsd_trucks":{
		variables:[
			"wsd_trck_typ",
			"wsd_vol_trck",
			"wsd_KPI_GHG_ne_trck",
		],
		advanced:0,
		otherQuestions:[],
	},
	"wsd_pumping_efficiency":{
		variables:[ 
			"wsd_pmp_head",
			"wsd_KPI_std_nrg_cons",
			"wsd_KPI_un_head_loss",
			"wsd_main_len",
			"wsd_pmp_size",
			"wsd_fri_loss",
			"wsd_sta_head",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wsd_topographic":{
		variables:[
			"wsd_min_pres",
			"wsd_hi_no_el",
			"wsd_lo_no_el",
			"wsd_av_no_el",
			"wsd_wt_el_no",
			"c_wsd_nrg_topo",
			"c_wsd_nrg_natu",
			"c_wsd_nrg_mini",
			"c_wsd_nrg_supp",
			"wsd_KPI_nrg_efficien",
			"wsd_KPI_nrg_topgraph",
		],
		advanced:1,
		otherQuestions:[],
	},

	//wwc
	"wwc_pumping":{
		variables:[
			"wwc_nrg_cons",
			"wwc_vol_pump",
			"wwc_KPI_GHG_elec",
			"wwc_KPI_nrg_per_m3",
		],
		advanced:0,
		otherQuestions:[
			"wwc_pumping_efficiency",
		],
	},
	"wwc_engines":{
		variables:[
			"wwc_fuel_typ",
			"wwc_vol_fuel",
			"wwc_KPI_GHG_ne_fuel",
		],
		advanced:0,
		otherQuestions:[],
	},
	"wwc_water_eff": {
		variables:[
			"wwc_wet_flow",
			"wwc_dry_flow",
			"wwc_coll_len",
			"wwc_infl_inf",
			"wwc_wd_ratio",
			"wwc_infl_infi",
			"wwc_vol_infi",
			"wwc_KPI_GHG_ii",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wwc_have_csos": {
		variables:[
			"wwc_comb_sew",
			"wwc_cso_incd",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wwc_pumping_efficiency": {
		variables:[
			"wwc_fri_loss", // Friction pipe losses
			"wwc_pmp_head",
			"wwc_pmp_size", // Size of pump
			"wwc_pmp_sthd",
			"wwc_pmp_type",
			"wwc_KPI_std_nrg_cons",
			"wwc_KPI_un_head_loss",
		],
		advanced:1,
		otherQuestions:[],
	},
	//wwt
	"wwt_producing_biogas":{
		variables:[
			"wwt_biog_pro",
			"wwt_biog_val",
			"c_wwt_biog_fla",
			"wwt_KPI_biog_x_bod",
			"wwt_KPI_GHG_ne_biog",
		],
		advanced:0,
		otherQuestions:[
			"wwt_valorizing_biogas",
		],
	},
	"wwt_valorizing_biogas":{
		variables:[
			"wwt_nrg_biog",
			"wwt_ch4_biog",
			"c_wwt_nrg_biog",
			"wwt_KPI_nrg_biogas",
			"wwt_KPI_nrg_x_biog",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wwt_engines":{
		variables:[
			"wwt_vol_fuel",
			"wwt_fuel_typ",
			"wwt_KPI_GHG_ne_fuel",
		],
		advanced:0,
		otherQuestions:[],
	},
	"wwt_trucks":{
		variables:[
			"wwt_trck_typ",
			"wwt_num_trip",
			"wwt_dist_dis",
			"c_wwt_nrg_tran",
			"wwt_KPI_GHG_ne_tsludge",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wwt_pumping_efficiency":{
		variables:[
			//TODO empty!
		],
		advanced:1,
		otherQuestions:[],
	},
	"wwt_sludge_mgmt":{
		variables:[
			"wwt_mass_slu",
			"wwt_dryw_slu",
			"wwt_slu_stor",
			"wwt_slu_st_v",
			"wwt_slu_dr_v",
			"wwt_slu_disp",
			"wwt_slu_type",
		],
		advanced:1,
		otherQuestions:[],
	},
	"wwt_pumping_efficiency":{
		variables:[
			"wwt_pmp_head",
			"wwt_pmp_type",
			"wwt_vol_pump",
			"wwt_nrg_pump",
			"wwt_KPI_std_nrg_cons",
			"wwt_KPI_std_elec_eff",
		],
		advanced:1,
		otherQuestions:[],
	},

	//wwd
	"wwd_engines":{
		variables:[
			"wwd_fuel_typ",
			"wwd_vol_fuel",
			"wwd_KPI_GHG_ne_fuel",
		],
		advanced:0,
		otherQuestions:[],
	},
};

//check if the "field" is inside questions
Questions.isInside=function(field) {
	//go over all questions
	var code;
	for(var question in this)
	{
		for(var i in this[question].variables)
		{
			code=this[question].variables[i];
			if(code==field) return true;
		}
	}
	return false;
}

//check if the "field" is shown or hidden
Questions.isHidden=function(field) {
	//go over all questions
	for(var question in this)
	{
		//if answer is yes, next question: all fields inside should be shown
		if(Global.Configuration['Yes/No'][question]==1){continue;}

		//if answer is no, look for "field" inside
		var code;
		for(var i in this[question].variables)
		{
			code=this[question].variables[i];
			if(code==field) return true;
		}
	}
	return false;
}

//return the codes according to an ubication inside "Global". ubication is a pointer to object
Questions.getQuestions=function(ubication) {
	var code,questions=[];
	//go over all questions
	for(var question in this)
	{
		if(typeof(this[question])=="function")continue;
		//check all codes inside
		for(var i in this[question].variables)
		{
			code=this[question].variables[i];
			//check if exists inside ubication
			if(ubication[code]!=undefined)
			{
				questions.push(question);
				break;
			}
		}
	}
	return questions;
}

//check if the question "field" should be hidden
Questions.isHiddenQuestion=function(field) {
	//go over all questions
	for(var question in this)
	{
		//if answer is yes, next question: all fields inside should be shown
		if(Global.Configuration['Yes/No'][question]==1){continue;}

		//if answer is no, look for "field" inside
		var code;
		for(var i in this[question].otherQuestions)
		{
			code=this[question].otherQuestions[i];
			if(code==field) return true;
		}
	}
	return false;
}
