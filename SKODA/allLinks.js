var data=["https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_mpi_59kw_80cv_essence_80cv_gasolina/110215/828267120240122/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_70kw_95cv_essence_95cv_gasolina/110208/41363320240122/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_mpi_59kw_80cv_selection_80cv_gasolina/110220/839434420240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_70kw_95cv_selection_95cv_gasolina/110209/756999020240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_85kw_115cv_selection_115cv_gasolina/110212/828266620240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_70kw_95cv_design_95cv_gasolina/110210/828266320240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_81kw_110cv_monte_carlo_110cv_gasolina/80623/831800120230101/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_85kw_115cv_design_115cv_gasolina/110211/828266520240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_85kw_115cv_dsg_selection_115cv_gasolina/110214/828266920240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_81kw_110cv_dsg_monte_carlo_110cv_gasolina/80622/831800020230101/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_85kw_115cv_monte_carlo_115cv_gasolina/110218/831800120240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_85kw_115cv_dsg_design_115cv_gasolina/110213/828266820240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/15_tsi_110kw_150cv_dsg_selection_150cv_gasolina/110216/829866220240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/10_tsi_85kw_115cv_dsg_monte_carlo_115cv_gasolina/110217/831800020240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/15_tsi_110kw_150cv_dsg_monte_carlo_150cv_gasolina/104570/831800220230101/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/15_tsi_110kw_150cv_dsg_design_150cv_gasolina/110219/837379620240112/","https://www.coches.net/fichas_tecnicas/skoda/fabia/berlina/5-puertas/15_tsi_110kw_150cv_dsg_monte_carlo_150cv_gasolina/104570/831800220240112/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/10_tsi_81kw_dsg_mhev_ambition_plus_110cv_electrico____hibrido/108362/819755120240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/10_tsi_81kw110cv_dsg_mhev_selection_110cv_electrico____hibrido/108267/835090420240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tdi_85kw_manual_ambition_plus_115cv_diesel/108360/817148020230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tdi_85kw_manual_ambition_plus_115cv_diesel/108360/817148020240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tdi_85kw_115_cv_manual_selection_115cv_diesel/108269/835090620230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tdi_85kw_115_cv_manual_selection_115cv_diesel/108269/835090620240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/15_tsi_mhev_110kw_dsg_ambition_plus_150cv_electrico____hibrido/108364/822713120240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/15_tsi_mhev_110kw150cv_dsg_selection_150cv_electrico____hibrido/108268/835090520240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tdi_110kw_dsg_ambition_plus_150cv_diesel/108356/718419720230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tdi_110kw_dsg_ambition_plus_150cv_diesel/108356/718419720240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tdi_110kw_150_cv_dsg_selection_150cv_diesel/108270/835090720230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tdi_110kw_150_cv_dsg_selection_150cv_diesel/108270/835090720240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tsi_180kw_245cv_dsg_rs_plus_245cv_gasolina/108359/784241720230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/berlina/5-puertas/20_tsi_180kw_245cv_dsg_rs_plus_245cv_gasolina/108359/784241720240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_81kw_110cv_active_110cv_gasolina/100367/808352020221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_70_kw_95_cv_ambition_95cv_gasolina/108314/811685420221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_70kw_95cv_essence_95cv_gasolina/109778/837995220240110/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_81kw_110_cv_ambition_110cv_gasolina/100368/808352220221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_85kw_115_cv_essence_115cv_gasolina/110792/840294520240110/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_70_kw_95_cv_selection_95cv_gasolina/109768/811685420240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_81kw_110cv_style_110cv_gasolina/100369/808352520221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_ambition_150cv_gasolina/95403/813664720221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_85kw_115_cv_selection_115cv_gasolina/109766/808352220240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_81kw_110cv_sport_110cv_gasolina/100370/830526820221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_style_150cv_gasolina/95405/813664920221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_81kw_110_cv_dsg_ambitio_110cv_gasolina/108313/811685320221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_70kw_95cv_design_95cv_gasolina/110793/840294620240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_81kw_110cv_dsg_style_110cv_gasolina/108312/808352620221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_sport_150cv_gasolina/95407/830527020221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_dsg_ambition_150cv_gasolina/95404/813664820221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_81kw_110cv_dsg_sport_110cv_gasolina/108316/830526920221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_dsg_style_150cv_gasolina/95406/813665020221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_selection_150cv_gasolina/109769/813664720240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_85kw_115cv_design_115cv_gasolina/109774/830526820240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_montecarlo_150cv_gasolina/96440/816029020221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_dsg_sport_150cv_gasolina/95408/830527120221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_85kw_115_cv_dsg_selection_115cv_gasolina/109767/811685320240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_81kw110cv_dsg_montecarlo_110cv_gasolina/108315/816029120221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_design_150cv_gasolina/109776/830527020240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_dsg_montecarlo_150cv_gasolina/96439/816028920221101/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_dsg_selection_150cv_gasolina/109770/813664820240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_85kw_115cv_dsg_design_115cv_gasolina/109775/830526920240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_monte_carlo_150cv_gasolina/109772/816029020240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_dsg_design_150cv_gasolina/109777/830527120240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/10_tsi_85kw115cv_dsg_monte_carlo_115cv_gasolina/109773/816029120240122/","https://www.coches.net/fichas_tecnicas/skoda/scala/berlina/5-puertas/15_tsi_110_kw_150_cv_dsg_monte_carlo_150cv_gasolina/109771/816028920240122/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/15_tsi_110kw_150cv_dsg_ambition_150cv_gasolina/88756/656113720231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/15_tsi_110kw_150cv_dsg_style_150cv_gasolina/88755/656113520231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/20_tdi_110kw_150cv_dsg_ambition_150cv_diesel/77458/663360820231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/20_tdi_110kw_150cv_dsg_style_150cv_diesel/77460/663361120231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/15_tsi_110kw_150cv_dsg_sportline_150cv_gasolina/94362/411976320231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/20_tsi_140kw_190cv_dsg_sportline_190cv_gasolina/93765/411183020231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/20_tdi_147kw_200cv_dsg_style_200cv_diesel/99487/668171720231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/20_tdi_110kw_150cv_dsg_sportline_150cv_diesel/91145/686037220231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/20_tdi_147kw_200cv_dsg_sportline_200cv_diesel/99489/678727520231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/sportline_14_tsi_iv_phev_160kw_dsg_218cv_electrico____hibrido/98960/414834120231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/20_tdi_147kw_200cv_dsg_4x4_sportline_200cv_diesel/99491/691202420231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/berlina/5-puertas/20_tsi_206kw_280cv_dsg_4x4_sportline_280cv_gasolina/100426/678727820231102/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_10_tsi_81kw_dsg_mhev_ambit_plus_110cv_electrico____hibrido/108363/819755220240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_10_tsi_81kw_dsg_mhev_selection_110cv_electrico____hibrido/108271/835090820240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tdi_85kw_man_ambition_plus_115cv_diesel/108361/817148120230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tdi_85kw_man_ambition_plus_115cv_diesel/108361/817148120240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tdi_85kw115cv_man_selection_115cv_diesel/108273/835091020230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tdi_85kw115cv_man_selection_115cv_diesel/108273/835091020240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_15_tsi_110kw_dsg_mhev_ambit_plus_150cv_electrico____hibrido/108365/822713920240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_15_tsi_110kw_dsg_mhev_selection_150cv_electrico____hibrido/108272/835090920240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tdi_110kw_dsg_ambition_plus_150cv_diesel/108357/719688020230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tdi_110kw_dsg_ambition_plus_150cv_diesel/108357/719688020240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tdi_110kw150cv_dsg_selection_150cv_diesel/108274/835091120230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tdi_110kw150cv_dsg_selection_150cv_diesel/108274/835091120240122/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tsi_180kw_245cv_dsg_rs_plus_245cv_gasolina/108358/784241520230105/","https://www.coches.net/fichas_tecnicas/skoda/octavia/familiar/5-puertas/combi_20_tsi_180kw_245cv_dsg_rs_plus_245cv_gasolina/108358/784241520240122/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_15_tsi_110kw_150cv_dsg_ambition_150cv_gasolina/88760/656126820231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_15_tsi_110kw_150cv_dsg_style_150cv_gasolina/88759/656126720231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_110kw_150cv_dsg_ambition_150cv_diesel/77426/839481720231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_110kw_150cv_dsg_ambition_150cv_diesel/77426/656125620231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_15_tsi_mhev_110kw_dsg_selection_150cv_electrico____hibrido/110576/839944820240122/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_110kw_150cv_dsg_style_150cv_diesel/77424/839481320231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_110kw_150cv_dsg_style_150cv_diesel/77424/656125420231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_15_tsi_110kw150cv_dsg_sportline_150cv_gasolina/94364/411976520231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tsi_140kw_dsg_sportline_190cv_gasolina/93770/411183520231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_147kw_200cv_dsg_style_200cv_diesel/99482/839481420231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_147kw_200cv_dsg_style_200cv_diesel/99482/656124620231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_110kw_dsg_selection_150cv_diesel/110577/839944920240122/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_110kw_dsg_sportline_150cv_diesel/91130/839481620231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_110kw_dsg_sportline_150cv_diesel/91130/686037020231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_15_tsi_mhev_110kw_dsg_lk_150cv_electrico____hibrido/110578/839945120240122/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_147kw200cv_dsg_sportline_200cv_diesel/99496/839481520231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_147kw200cv_dsg_sportline_200cv_diesel/99496/411183420231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_sportline_14_tsi_iv_phev_dsg_218cv_electrico____hibrido/95993/414834520231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_147kw_dsg_4x4_sportline_200cv_diesel/99490/691202120231102/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tdi_110kw_dsg_lk_150cv_diesel/72410/839945020240122/","https://www.coches.net/fichas_tecnicas/skoda/superb/familiar/5-puertas/combi_20_tsi_206kw_dsg_4x4_sportline_280cv_gasolina/100427/678728220231102/","https://www.coches.net/fichas_tecnicas/skoda/enyaq/4x4/5-puertas/60_132_kw_180_cv_60_kwh_58_kwh_net_180cv_electrico____hibrido/110635/822691520231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq/4x4/5-puertas/85_210_kw__cv_82_kwh_77_kwh_neta_286cv_electrico____hibrido/110118/822691420231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq/4x4/5-puertas/85_4x4_210_kw__cv_82_kwh_77_kwh_neta_286cv_electrico____hibrido/110120/826760220231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq/4x4/5-puertas/sportline_85_210_kw__cv_82_kwh_77_kwh_286cv_electrico____hibrido/110119/825706820231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq/4x4/5-puertas/rs_250_kw__cv_82_kwh_77_kwh_neta_340cv_electrico____hibrido/110125/834898320231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq_coupe/4x4/5-puertas/60_132_kw_180_cv_60_kwh_58_kwh_net_180cv_electrico____hibrido/110636/836011920231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq_coupe/4x4/5-puertas/85_210_kw__cv_82_kwh_77_kwh_neta_286cv_electrico____hibrido/110121/833297120231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq_coupe/4x4/5-puertas/85_4x4_210_kw__cv_82_kwh_77_kwh_neta_286cv_electrico____hibrido/110122/833297220231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq_coupe/4x4/5-puertas/sportline_85_210_kw__cv_82_kwh_77_kwh_286cv_electrico____hibrido/110123/833297320231211/","https://www.coches.net/fichas_tecnicas/skoda/enyaq_coupe/4x4/5-puertas/rs_250_kw__cv_82_kwh_77_kwh_neta_340cv_electrico____hibrido/110124/833297420231211/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_70kw_95cv_ambition_95cv_gasolina/94531/812414620230101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_70kw_95cv_essence_95cv_gasolina/110141/838611020240110/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_85kw_115cv_essence_115cv_gasolina/110780/840292520240110/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_70kw_95cv_selection_95cv_gasolina/110131/812414620240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_ambition_150cv_gasolina/94543/812415820221101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_85kw_115cv_selection_115cv_gasolina/110129/812414220240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_70kw_95cv_design_95cv_gasolina/110781/840292620240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_style_150cv_gasolina/94544/812415920221101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_scout_150cv_gasolina/99578/821918320221101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_ambition_150cv_gasolina/94548/812416320221101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_85kw_115cv_design_115cv_gasolina/110295/812414520240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_selection_150cv_gasolina/110134/812415820240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_85kw_115cv_dsg_selection_115cv_gasolina/110297/812415020240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_design_150cv_gasolina/110135/812416020240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_montecarlo_150cv_gasolina/96303/815908320230101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_style_150cv_gasolina/94546/812416120221101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_scout_150cv_gasolina/99577/821918220221101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_85kw_115cv_dsg_design_115cv_gasolina/110296/812414920240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_selection_150cv_gasolina/110137/812416320240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_monte_carlo_150cv_gasolina/110139/815908320240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_montecarlo_150cv_gasolina/96302/815908220230101/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_design_150cv_gasolina/110136/812416220240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/10_tsi_85kw_115cv_dsg_monte_carlo_115cv_gasolina/110298/815908520240122/","https://www.coches.net/fichas_tecnicas/skoda/kamiq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_monte_carlo_150cv_gasolina/110138/815908220240122/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_110kw_150cv_ambition_150cv_diesel/89396/804796320181222/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/10_tsi_81kw_110cv_ambition_110cv_gasolina/99912/683013520230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/10_tsi_81kw_110cv_selection_110cv_gasolina/109782/838019520231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_act_ambition_150cv_gasolina/96846/697490120230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_85kw_115cv_ambition_115cv_diesel/99914/688916620230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_act_style_150cv_gasolina/82697/630606620230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_act_selection_150cv_gasolina/109780/838019320231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_85kw_115cv_selection_115cv_diesel/109781/838019420231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_act_ambition_150cv_gasolina/89395/630606720230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_85kw_115cv_dsg_ambition_115cv_diesel/99913/688916520230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_act_style_150cv_gasolina/82696/630606520230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_85kw_115cv_design_115cv_diesel/109784/838019720231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_act_style_150cv_gasolina/82697/838019920231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_act_selection_150cv_gasolina/109783/838019620231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_85kw_115cv_dsg_style_115cv_diesel/105296/432967120230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_act_sportline_150cv_gasolina/94479/812259420231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_act_design_150cv_gasolina/109786/838020020231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_85kw_115cv_sportline_115cv_diesel/109839/838351120231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_85kw_115cv_dsg_sportline_115cv_diesel/105297/432967220230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_act_sportline_150cv_gasolina/89397/804796520231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_110kw_150cv_dsg_4x4_ambition_150cv_diesel/82706/404796420230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_110kw_150cv_dsg_4x4_style_150cv_diesel/82702/404797120230801/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_110kw_150cv_dsg_4x4_selection_150cv_diesel/109779/838019220231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_110kw_150cv_dsg_4x4_design_150cv_diesel/109785/838019820231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tdi_110kw_150cv_dsg_4x4_sportline_150cv_diesel/89399/804796720231017/","https://www.coches.net/fichas_tecnicas/skoda/karoq/4x4/5-puertas/20_tsi_140kw_190cv_dsg_4x4_sportline_190cv_gasolina/94480/824239720231017/","https://www.coches.net/fichas_tecnicas/skoda/kodiaq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_4x2_ambition_150cv_gasolina/88355/777041220231221/","https://www.coches.net/fichas_tecnicas/skoda/kodiaq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_4x2_style_150cv_gasolina/88363/795585220231221/","https://www.coches.net/fichas_tecnicas/skoda/kodiaq/4x4/5-puertas/15_tsi_110kw_150cv_dsg_4x2_sportline_150cv_gasolina/88362/795585120231221/","https://www.coches.net/fichas_tecnicas/skoda/kodiaq/4x4/5-puertas/20_tdi_147kw_200cv_dsg_4x4_style_200cv_diesel/98495/777042120231221/","https://www.coches.net/fichas_tecnicas/skoda/kodiaq/4x4/5-puertas/20_tdi_147kw_200cv_dsg_4x4_sportline_200cv_diesel/98498/804968420231221/","https://www.coches.net/fichas_tecnicas/skoda/kodiaq/4x4/5-puertas/20_tsi_180kw_245cv_dsg_rs_245cv_gasolina/102609/827773120231221/"]