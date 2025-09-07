JavaScript Fetch Code for voluntaryregistryoffsets table

Here is the JavaScript code for fetching each column individually from the voluntaryregistryoffsets table, now including a description for each field.

Field: project_id
Description: A unique identifier for the project.

// Fetch the 'project_id' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_id');

Field: project_name
Description: The name of the project.

// Fetch the 'project_name' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_name');

Field: voluntary_registry
Description: The registry that lists the project.

// Fetch the 'voluntary_registry' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('voluntary_registry');

Field: arb_wa_project
Description: Indicates if the project is associated with the California Air Resources Board (ARB) or Washington State (WA).

// Fetch the 'arb_wa_project' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('arb_wa_project');

Field: voluntary_status
Description: The current status of the project within the voluntary registry.

// Fetch the 'voluntary_status' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('voluntary_status');

Field: scope
Description: The scope of the project, often related to the type of emissions it addresses.

// Fetch the 'scope' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('scope');

Field: type
Description: The type of carbon offset project.

// Fetch the 'type' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('type');

Field: reduction_removal
Description: Indicates if the project involves emission reductions or carbon removals.

// Fetch the 'reduction_removal' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('reduction_removal');

Field: methodology_protocol
Description: The specific methodology or protocol used to quantify emissions reductions.

// Fetch the 'methodology_protocol' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('methodology_protocol');

Field: methodology_version
Description: The version of the methodology used.

// Fetch the 'methodology_version' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('methodology_version');

Field: region
Description: The geographical region where the project is located.

// Fetch the 'region' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('region');

Field: country
Description: The country of the project.

// Fetch the 'country' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('country');

Field: state
Description: The state (or province) of the project.

// Fetch the 'state' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('state');

Field: project_site_location
Description: The specific site or location of the project.

// Fetch the 'project_site_location' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_site_location');

Field: project_developer
Description: The entity that developed the project.

// Fetch the 'project_developer' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_developer');

Field: total_credits_issued
Description: The total number of credits issued for the project.

// Fetch the 'total_credits_issued' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('total_credits_issued');

Field: total_credits_retired
Description: The total number of credits that have been retired (used).

// Fetch the 'total_credits_retired' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('total_credits_retired');

Field: total_credits_remaining
Description: The total number of credits available for use.

// Fetch the 'total_credits_remaining' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('total_credits_remaining');

Field: total_buffer_pool_deposits
Description: The total credits deposited into the registry's buffer pool to cover potential reversals.

// Fetch the 'total_buffer_pool_deposits' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('total_buffer_pool_deposits');

Field: reversals_covered_by_buffer_pool
Description: Reversals of credits that were covered by the buffer pool.

// Fetch the 'reversals_covered_by_buffer_pool' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('reversals_covered_by_buffer_pool');

Field: reversals_not_covered_by_buffer
Description: Reversals that were not covered by the buffer pool.

// Fetch the 'reversals_not_covered_by_buffer' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('reversals_not_covered_by_buffer');

Field: buffer_credits_released_to_project
Description: Credits released from the buffer pool back to the project.

// Fetch the 'buffer_credits_released_to_project' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('buffer_credits_released_to_project');

Field: first_year_of_project_vintage
Description: The first year credits were issued from the project.

// Fetch the 'first_year_of_project_vintage' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('first_year_of_project_vintage');

Field: credits_issued_by_vintage_year_1996
Description: Credits issued for a specific vintage year (1996).

// Fetch the 'credits_issued_by_vintage_year_1996' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_1996');

Field: credits_issued_by_vintage_year_1997
Description: Credits issued for a specific vintage year (1997).

// Fetch the 'credits_issued_by_vintage_year_1997' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_1997');

Field: credits_issued_by_vintage_year_1998
Description: Credits issued for a specific vintage year (1998).

// Fetch the 'credits_issued_by_vintage_year_1998' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_1998');

Field: credits_issued_by_vintage_year_1999
Description: Credits issued for a specific vintage year (1999).

// Fetch the 'credits_issued_by_vintage_year_1999' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_1999');

Field: credits_issued_by_vintage_year_2000
Description: Credits issued for a specific vintage year (2000).

// Fetch the 'credits_issued_by_vintage_year_2000' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2000');

Field: credits_issued_by_vintage_year_2001
Description: Credits issued for a specific vintage year (2001).

// Fetch the 'credits_issued_by_vintage_year_2001' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2001');

Field: credits_issued_by_vintage_year_2002
Description: Credits issued for a specific vintage year (2002).

// Fetch the 'credits_issued_by_vintage_year_2002' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2002');

Field: credits_issued_by_vintage_year_2003
Description: Credits issued for a specific vintage year (2003).

// Fetch the 'credits_issued_by_vintage_year_2003' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2003');

Field: credits_issued_by_vintage_year_2004
Description: Credits issued for a specific vintage year (2004).

// Fetch the 'credits_issued_by_vintage_year_2004' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2004');

Field: credits_issued_by_vintage_year_2005
Description: Credits issued for a specific vintage year (2005).

// Fetch the 'credits_issued_by_vintage_year_2005' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2005');

Field: credits_issued_by_vintage_year_2006
Description: Credits issued for a specific vintage year (2006).

// Fetch the 'credits_issued_by_vintage_year_2006' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2006');

Field: credits_issued_by_vintage_year_2007
Description: Credits issued for a specific vintage year (2007).

// Fetch the 'credits_issued_by_vintage_year_2007' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2007');

Field: credits_issued_by_vintage_year_2008
Description: Credits issued for a specific vintage year (2008).

// Fetch the 'credits_issued_by_vintage_year_2008' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2008');

Field: credits_issued_by_vintage_year_2009
Description: Credits issued for a specific vintage year (2009).

// Fetch the 'credits_issued_by_vintage_year_2009' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2009');

Field: credits_issued_by_vintage_year_2010
Description: Credits issued for a specific vintage year (2010).

// Fetch the 'credits_issued_by_vintage_year_2010' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2010');

Field: credits_issued_by_vintage_year_2011
Description: Credits issued for a specific vintage year (2011).

// Fetch the 'credits_issued_by_vintage_year_2011' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2011');

Field: credits_issued_by_vintage_year_2012
Description: Credits issued for a specific vintage year (2012).

// Fetch the 'credits_issued_by_vintage_year_2012' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2012');

Field: credits_issued_by_vintage_year_2013
Description: Credits issued for a specific vintage year (2013).

// Fetch the 'credits_issued_by_vintage_year_2013' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2013');

Field: credits_issued_by_vintage_year_2014
Description: Credits issued for a specific vintage year (2014).

// Fetch the 'credits_issued_by_vintage_year_2014' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2014');

Field: credits_issued_by_vintage_year_2015
Description: Credits issued for a specific vintage year (2015).

// Fetch the 'credits_issued_by_vintage_year_2015' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2015');

Field: credits_issued_by_vintage_year_2016
Description: Credits issued for a specific vintage year (2016).

// Fetch the 'credits_issued_by_vintage_year_2016' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2016');

Field: credits_issued_by_vintage_year_2017
Description: Credits issued for a specific vintage year (2017).

// Fetch the 'credits_issued_by_vintage_year_2017' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2017');

Field: credits_issued_by_vintage_year_2018
Description: Credits issued for a specific vintage year (2018).

// Fetch the 'credits_issued_by_vintage_year_2018' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2018');

Field: credits_issued_by_vintage_year_2019
Description: Credits issued for a specific vintage year (2019).

// Fetch the 'credits_issued_by_vintage_year_2019' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2019');

Field: credits_issued_by_vintage_year_2020
Description: Credits issued for a specific vintage year (2020).

// Fetch the 'credits_issued_by_vintage_year_2020' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2020');

Field: credits_issued_by_vintage_year_2021
Description: Credits issued for a specific vintage year (2021).

// Fetch the 'credits_issued_by_vintage_year_2021' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2021');

Field: credits_issued_by_vintage_year_2022
Description: Credits issued for a specific vintage year (2022).

// Fetch the 'credits_issued_by_vintage_year_2022' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2022');

Field: credits_issued_by_vintage_year_2023
Description: Credits issued for a specific vintage year (2023).

// Fetch the 'credits_issued_by_vintage_year_2023' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2023');

Field: credits_issued_by_vintage_year_2024
Description: Credits issued for a specific vintage year (2024).

// Fetch the 'credits_issued_by_vintage_year_2024' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2024');

Field: credits_issued_by_vintage_year_2025
Description: Credits issued for a specific vintage year (2025).

// Fetch the 'credits_issued_by_vintage_year_2025' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_vintage_year_2025');

Field: credits_retired_or_cancelled_1996
Description: Credits retired or canceled for a specific vintage year (1996).

// Fetch the 'credits_retired_or_cancelled_1996' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_1996');

Field: credits_retired_or_cancelled_1997
Description: Credits retired or canceled for a specific vintage year (1997).

// Fetch the 'credits_retired_or_cancelled_1997' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_1997');

Field: credits_retired_or_cancelled_1998
Description: Credits retired or canceled for a specific vintage year (1998).

// Fetch the 'credits_retired_or_cancelled_1998' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_1998');

Field: credits_retired_or_cancelled_1999
Description: Credits retired or canceled for a specific vintage year (1999).

// Fetch the 'credits_retired_or_cancelled_1999' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_1999');

Field: credits_retired_or_cancelled_2000
Description: Credits retired or canceled for a specific vintage year (2000).

// Fetch the 'credits_retired_or_cancelled_2000' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2000');

Field: credits_retired_or_cancelled_2001
Description: Credits retired or canceled for a specific vintage year (2001).

// Fetch the 'credits_retired_or_cancelled_2001' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2001');

Field: credits_retired_or_cancelled_2002
Description: Credits retired or canceled for a specific vintage year (2002).

// Fetch the 'credits_retired_or_cancelled_2002' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2002');

Field: credits_retired_or_cancelled_2003
Description: Credits retired or canceled for a specific vintage year (2003).

// Fetch the 'credits_retired_or_cancelled_2003' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2003');

Field: credits_retired_or_cancelled_2004
Description: Credits retired or canceled for a specific vintage year (2004).

// Fetch the 'credits_retired_or_cancelled_2004' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2004');

Field: credits_retired_or_cancelled_2005
Description: Credits retired or canceled for a specific vintage year (2005).

// Fetch the 'credits_retired_or_cancelled_2005' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2005');

Field: credits_retired_or_cancelled_2006
Description: Credits retired or canceled for a specific vintage year (2006).

// Fetch the 'credits_retired_or_cancelled_2006' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2006');

Field: credits_retired_or_cancelled_2007
Description: Credits retired or canceled for a specific vintage year (2007).

// Fetch the 'credits_retired_or_cancelled_2007' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2007');

Field: credits_retired_or_cancelled_2008
Description: Credits retired or canceled for a specific vintage year (2008).

// Fetch the 'credits_retired_or_cancelled_2008' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2008');

Field: credits_retired_or_cancelled_2009
Description: Credits retired or canceled for a specific vintage year (2009).

// Fetch the 'credits_retired_or_cancelled_2009' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2009');

Field: credits_retired_or_cancelled_2010
Description: Credits retired or canceled for a specific vintage year (2010).

// Fetch the 'credits_retired_or_cancelled_2010' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2010');

Field: credits_retired_or_cancelled_2011
Description: Credits retired or canceled for a specific vintage year (2011).

// Fetch the 'credits_retired_or_cancelled_2011' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2011');

Field: credits_retired_or_cancelled_2012
Description: Credits retired or canceled for a specific vintage year (2012).

// Fetch the 'credits_retired_or_cancelled_2012' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2012');

Field: credits_retired_or_cancelled_2013
Description: Credits retired or canceled for a specific vintage year (2013).

// Fetch the 'credits_retired_or_cancelled_2013' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2013');

Field: credits_retired_or_cancelled_2014
Description: Credits retired or canceled for a specific vintage year (2014).

// Fetch the 'credits_retired_or_cancelled_2014' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2014');

Field: credits_retired_or_cancelled_2015
Description: Credits retired or canceled for a specific vintage year (2015).

// Fetch the 'credits_retired_or_cancelled_2015' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2015');

Field: credits_retired_or_cancelled_2016
Description: Credits retired or canceled for a specific vintage year (2016).

// Fetch the 'credits_retired_or_cancelled_2016' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2016');

Field: credits_retired_or_cancelled_2017
Description: Credits retired or canceled for a specific vintage year (2017).

// Fetch the 'credits_retired_or_cancelled_2017' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2017');

Field: credits_retired_or_cancelled_2018
Description: Credits retired or canceled for a specific vintage year (2018).

// Fetch the 'credits_retired_or_cancelled_2018' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2018');

Field: credits_retired_or_cancelled_2019
Description: Credits retired or canceled for a specific vintage year (2019).

// Fetch the 'credits_retired_or_cancelled_2019' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2019');

Field: credits_retired_or_cancelled_2020
Description: Credits retired or canceled for a specific vintage year (2020).

// Fetch the 'credits_retired_or_cancelled_2020' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2020');

Field: credits_retired_or_cancelled_2021
Description: Credits retired or canceled for a specific vintage year (2021).

// Fetch the 'credits_retired_or_cancelled_2021' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2021');

Field: credits_retired_or_cancelled_2022
Description: Credits retired or canceled for a specific vintage year (2022).

// Fetch the 'credits_retired_or_cancelled_2022' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2022');

Field: credits_retired_or_cancelled_2023
Description: Credits retired or canceled for a specific vintage year (2023).

// Fetch the 'credits_retired_or_cancelled_2023' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2023');

Field: credits_retired_or_cancelled_2024
Description: Credits retired or canceled for a specific vintage year (2024).

// Fetch the 'credits_retired_or_cancelled_2024' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2024');

Field: credits_retired_or_cancelled_2025
Description: Credits retired or canceled for a specific vintage year (2025).

// Fetch the 'credits_retired_or_cancelled_2025' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2025');

Field: credits_retired_or_cancelled_year_unknown
Description: Credits retired or canceled with an unknown vintage year.

// Fetch the 'credits_retired_or_cancelled_year_unknown' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_year_unknown');

Field: credits_remaining_by_vintage_1996
Description: Credits remaining for a specific vintage year (1996).

// Fetch the 'credits_remaining_by_vintage_1996' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_1996');

Field: credits_remaining_by_vintage_1997
Description: Credits remaining for a specific vintage year (1997).

// Fetch the 'credits_remaining_by_vintage_1997' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_1997');

Field: credits_remaining_by_vintage_1998
Description: Credits remaining for a specific vintage year (1998).

// Fetch the 'credits_remaining_by_vintage_1998' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_1998');

Field: credits_remaining_by_vintage_1999
Description: Credits remaining for a specific vintage year (1999).

// Fetch the 'credits_remaining_by_vintage_1999' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_1999');

Field: credits_remaining_by_vintage_2000
Description: Credits remaining for a specific vintage year (2000).

// Fetch the 'credits_remaining_by_vintage_2000' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2000');

Field: credits_remaining_by_vintage_2001
Description: Credits remaining for a specific vintage year (2001).

// Fetch the 'credits_remaining_by_vintage_2001' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2001');

Field: credits_remaining_by_vintage_2002
Description: Credits remaining for a specific vintage year (2002).

// Fetch the 'credits_remaining_by_vintage_2002' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2002');

Field: credits_remaining_by_vintage_2003
Description: Credits remaining for a specific vintage year (2003).

// Fetch the 'credits_remaining_by_vintage_2003' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2003');

Field: credits_remaining_by_vintage_2004
Description: Credits remaining for a specific vintage year (2004).

// Fetch the 'credits_remaining_by_vintage_2004' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2004');

Field: credits_remaining_by_vintage_2005
Description: Credits remaining for a specific vintage year (2005).

// Fetch the 'credits_remaining_by_vintage_2005' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2005');

Field: credits_remaining_by_vintage_2006
Description: Credits remaining for a specific vintage year (2006).

// Fetch the 'credits_remaining_by_vintage_2006' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2006');

Field: credits_remaining_by_vintage_2007
Description: Credits remaining for a specific vintage year (2007).

// Fetch the 'credits_remaining_by_vintage_2007' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2007');

Field: credits_remaining_by_vintage_2008
Description: Credits remaining for a specific vintage year (2008).

// Fetch the 'credits_remaining_by_vintage_2008' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2008');

Field: credits_remaining_by_vintage_2009
Description: Credits remaining for a specific vintage year (2009).

// Fetch the 'credits_remaining_by_vintage_2009' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2009');

Field: credits_remaining_by_vintage_2010
Description: Credits remaining for a specific vintage year (2010).

// Fetch the 'credits_remaining_by_vintage_2010' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2010');

Field: credits_remaining_by_vintage_2011
Description: Credits remaining for a specific vintage year (2011).

// Fetch the 'credits_remaining_by_vintage_2011' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2011');

Field: credits_remaining_by_vintage_2012
Description: Credits remaining for a specific vintage year (2012).

// Fetch the 'credits_remaining_by_vintage_2012' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2012');

Field: credits_remaining_by_vintage_2013
Description: Credits remaining for a specific vintage year (2013).

// Fetch the 'credits_remaining_by_vintage_2013' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2013');

Field: credits_remaining_by_vintage_2014
Description: Credits remaining for a specific vintage year (2014).

// Fetch the 'credits_remaining_by_vintage_2014' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2014');

Field: credits_remaining_by_vintage_2015
Description: Credits remaining for a specific vintage year (2015).

// Fetch the 'credits_remaining_by_vintage_2015' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2015');

Field: credits_remaining_by_vintage_2016
Description: Credits remaining for a specific vintage year (2016).

// Fetch the 'credits_remaining_by_vintage_2016' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2016');

Field: credits_remaining_by_vintage_2017
Description: Credits remaining for a specific vintage year (2017).

// Fetch the 'credits_remaining_by_vintage_2017' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2017');

Field: credits_remaining_by_vintage_2018
Description: Credits remaining for a specific vintage year (2018).

// Fetch the 'credits_remaining_by_vintage_2018' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2018');

Field: credits_remaining_by_vintage_2019
Description: Credits remaining for a specific vintage year (2019).

// Fetch the 'credits_remaining_by_vintage_2019' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2019');

Field: credits_remaining_by_vintage_2020
Description: Credits remaining for a specific vintage year (2020).

// Fetch the 'credits_remaining_by_vintage_2020' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2020');

Field: credits_remaining_by_vintage_2021
Description: Credits remaining for a specific vintage year (2021).

// Fetch the 'credits_remaining_by_vintage_2021' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2021');

Field: credits_remaining_by_vintage_2022
Description: Credits remaining for a specific vintage year (2022).

// Fetch the 'credits_remaining_by_vintage_2022' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2022');

Field: credits_remaining_by_vintage_2023
Description: Credits remaining for a specific vintage year (2023).

// Fetch the 'credits_remaining_by_vintage_2023' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2023');

Field: credits_remaining_by_vintage_2024
Description: Credits remaining for a specific vintage year (2024).

// Fetch the 'credits_remaining_by_vintage_2024' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2024');

Field: credits_remaining_by_vintage_2025
Description: Credits remaining for a specific vintage year (2025).

// Fetch the 'credits_remaining_by_vintage_2025' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2025');

Field: project_owner
Description: The owner of the project.

// Fetch the 'project_owner' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_owner');

Field: offset_project_operator
Description: The operator of the offset project.

// Fetch the 'offset_project_operator' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('offset_project_operator');

Field: authorized_roject_designee
Description: The authorized designee for the project.

// Fetch the 'authorized_roject_designee' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('authorized_roject_designee');

Field: verifier
Description: The third-party verifier of the project.

// Fetch the 'verifier' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('verifier');

Field: estimated_annual_emission_reductions
Description: The estimated yearly emission reductions.

// Fetch the 'estimated_annual_emission_reductions' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('estimated_annual_emission_reductions');

Field: pers
Description: A placeholder for an unknown field.

// Fetch the 'pers' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('pers');

Field: registry_arb_wa
Description: The specific ARB or WA registry.

// Fetch the 'registry_arb_wa' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('registry_arb_wa');

Field: arb_wa_status
Description: The project's status within the ARB or WA system.

// Fetch the 'arb_wa_status' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('arb_wa_status');

Field: arb_wa_id
Description: The unique ID for the project in the ARB or WA registry.

// Fetch the 'arb_wa_id' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('arb_wa_id');

Field: poa_aggregate_id
Description: The ID for a Program of Activities (PoA) or an aggregated project.

// Fetch the 'poa_aggregate_id' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('poa_aggregate_id');

Field: poa_vpa_status
Description: The status of the PoA/VPA.

// Fetch the 'poa_vpa_status' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('poa_vpa_status');

Field: corsia_eligible
Description: Indicates if the project is eligible for CORSIA (Carbon Offsetting and Reduction Scheme for International Aviation).

// Fetch the 'corsia_eligible' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('corsia_eligible');

Field: project_listed
Description: The date the project was listed on the registry.

// Fetch the 'project_listed' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_listed');

Field: project_registered
Description: The date the project was registered.

// Fetch the 'project_registered' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_registered');

Field: sustainability_certifications
Description: Any additional sustainability certifications the project has received.

// Fetch the 'sustainability_certifications' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('sustainability_certifications');

Field: project_type_from_the_registry
Description: The project type from the registry.

// Fetch the 'project_type_from_the_registry' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_type_from_the_registry');

Field: registry_documents
Description: A link or reference to documents on the registry.

// Fetch the 'registry_documents' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('registry_documents');

Field: project_website
Description: The official website for the project.

// Fetch the 'project_website' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_website');

Field: credits_issued_by_issuance_year_1996
Description: Credits issued in a specific calendar year (1996).

// Fetch the 'credits_issued_by_issuance_year_1996' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_1996');

Field: credits_issued_by_issuance_year_1997
Description: Credits issued in a specific calendar year (1997).

// Fetch the 'credits_issued_by_issuance_year_1997' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_1997');

Field: credits_issued_by_issuance_year_1998
Description: Credits issued in a specific calendar year (1998).

// Fetch the 'credits_issued_by_issuance_year_1998' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_1998');

Field: credits_issued_by_issuance_year_1999
Description: Credits issued in a specific calendar year (1999).

// Fetch the 'credits_issued_by_issuance_year_1999' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_1999');

Field: credits_issued_by_issuance_year_2000
Description: Credits issued in a specific calendar year (2000).

// Fetch the 'credits_issued_by_issuance_year_2000' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2000');

Field: credits_issued_by_issuance_year_2001
Description: Credits issued in a specific calendar year (2001).

// Fetch the 'credits_issued_by_issuance_year_2001' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2001');

Field: credits_issued_by_issuance_year_2002
Description: Credits issued in a specific calendar year (2002).

// Fetch the 'credits_issued_by_issuance_year_2002' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2002');

Field: credits_issued_by_issuance_year_2003
Description: Credits issued in a specific calendar year (2003).

// Fetch the 'credits_issued_by_issuance_year_2003' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2003');

Field: credits_issued_by_issuance_year_2004
Description: Credits issued in a specific calendar year (2004).

// Fetch the 'credits_issued_by_issuance_year_2004' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2004');

Field: credits_issued_by_issuance_year_2005
Description: Credits issued in a specific calendar year (2005).

// Fetch the 'credits_issued_by_issuance_year_2005' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2005');

Field: credits_issued_by_issuance_year_2006
Description: Credits issued in a specific calendar year (2006).

// Fetch the 'credits_issued_by_issuance_year_2006' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2006');

Field: credits_issued_by_issuance_year_2007
Description: Credits issued in a specific calendar year (2007).

// Fetch the 'credits_issued_by_issuance_year_2007' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2007');

Field: credits_issued_by_issuance_year_2008
Description: Credits issued in a specific calendar year (2008).

// Fetch the 'credits_issued_by_issuance_year_2008' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2008');

Field: credits_issued_by_issuance_year_2009
Description: Credits issued in a specific calendar year (2009).

// Fetch the 'credits_issued_by_issuance_year_2009' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2009');

Field: credits_issued_by_issuance_year_2010
Description: Credits issued in a specific calendar year (2010).

// Fetch the 'credits_issued_by_issuance_year_2010' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2010');

Field: credits_issued_by_issuance_year_2011
Description: Credits issued in a specific calendar year (2011).

// Fetch the 'credits_issued_by_issuance_year_2011' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2011');

Field: credits_issued_by_issuance_year_2012
Description: Credits issued in a specific calendar year (2012).

// Fetch the 'credits_issued_by_issuance_year_2012' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2012');

Field: credits_issued_by_issuance_year_2013
Description: Credits issued in a specific calendar year (2013).

// Fetch the 'credits_issued_by_issuance_year_2013' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2013');

Field: credits_issued_by_issuance_year_2014
Description: Credits issued in a specific calendar year (2014).

// Fetch the 'credits_issued_by_issuance_year_2014' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2014');

Field: credits_issued_by_issuance_year_2015
Description: Credits issued in a specific calendar year (2015).

// Fetch the 'credits_issued_by_issuance_year_2015' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2015');

Field: credits_issued_by_issuance_year_2016
Description: Credits issued in a specific calendar year (2016).

// Fetch the 'credits_issued_by_issuance_year_2016' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2016');

Field: credits_issued_by_issuance_year_2017
Description: Credits issued in a specific calendar year (2017).

// Fetch the 'credits_issued_by_issuance_year_2017' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2017');

Field: credits_issued_by_issuance_year_2018
Description: Credits issued in a specific calendar year (2018).

// Fetch the 'credits_issued_by_issuance_year_2018' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2018');

Field: credits_issued_by_issuance_year_2019
Description: Credits issued in a specific calendar year (2019).

// Fetch the 'credits_issued_by_issuance_year_2019' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2019');

Field: credits_issued_by_issuance_year_2020
Description: Credits issued in a specific calendar year (2020).

// Fetch the 'credits_issued_by_issuance_year_2020' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2020');

Field: credits_issued_by_issuance_year_2021
Description: Credits issued in a specific calendar year (2021).

// Fetch the 'credits_issued_by_issuance_year_2021' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2021');

Field: credits_issued_by_issuance_year_2022
Description: Credits issued in a specific calendar year (2022).

// Fetch the 'credits_issued_by_issuance_year_2022' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2022');

Field: credits_issued_by_issuance_year_2023
Description: Credits issued in a specific calendar year (2023).

// Fetch the 'credits_issued_by_issuance_year_2023' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2023');

Field: credits_issued_by_issuance_year_2024
Description: Credits issued in a specific calendar year (2024).

// Fetch the 'credits_issued_by_issuance_year_2024' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2024');

Field: credits_issued_by_issuance_year_2025
Description: Credits issued in a specific calendar year (2025).

// Fetch the 'credits_issued_by_issuance_year_2025' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2025');

Field: project_description
Description: A general description of the project.

// Fetch the 'project_description' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_description');

Field: notes_from_registry
Description: Any notes or comments from the registry.

// Fetch the 'notes_from_registry' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('notes_from_registry');

Field: notes_from_berkeley_carbon_trading_project
Description: Notes added by the Berkeley Carbon Trading Project.

// Fetch the 'notes_from_berkeley_carbon_trading_project' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('notes_from_berkeley_carbon_trading_project');

Field: date_project_added_to_database
Description: The date the project record was added to this database.

// Fetch the 'date_project_added_to_database' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('date_project_added_to_database');

Field: credits_retired_or_cancelled_1996
Description: Credits retired or canceled for a specific vintage year (1996).

// Fetch the 'credits_retired_or_cancelled_1996' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_1996');

Field: credits_retired_or_cancelled_1997
Description: Credits retired or canceled for a specific vintage year (1997).

// Fetch the 'credits_retired_or_cancelled_1997' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_1997');

Field: credits_retired_or_cancelled_1998
Description: Credits retired or canceled for a specific vintage year (1998).

// Fetch the 'credits_retired_or_cancelled_1998' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_1998');

Field: credits_retired_or_cancelled_1999
Description: Credits retired or canceled for a specific vintage year (1999).

// Fetch the 'credits_retired_or_cancelled_1999' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_1999');

Field: credits_retired_or_cancelled_2000
Description: Credits retired or canceled for a specific vintage year (2000).

// Fetch the 'credits_retired_or_cancelled_2000' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2000');

Field: credits_retired_or_cancelled_2001
Description: Credits retired or canceled for a specific vintage year (2001).

// Fetch the 'credits_retired_or_cancelled_2001' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2001');

Field: credits_retired_or_cancelled_2002
Description: Credits retired or canceled for a specific vintage year (2002).

// Fetch the 'credits_retired_or_cancelled_2002' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2002');

Field: credits_retired_or_cancelled_2003
Description: Credits retired or canceled for a specific vintage year (2003).

// Fetch the 'credits_retired_or_cancelled_2003' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2003');

Field: credits_retired_or_cancelled_2004
Description: Credits retired or canceled for a specific vintage year (2004).

// Fetch the 'credits_retired_or_cancelled_2004' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2004');

Field: credits_retired_or_cancelled_2005
Description: Credits retired or canceled for a specific vintage year (2005).

// Fetch the 'credits_retired_or_cancelled_2005' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2005');

Field: credits_retired_or_cancelled_2006
Description: Credits retired or canceled for a specific vintage year (2006).

// Fetch the 'credits_retired_or_cancelled_2006' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2006');

Field: credits_retired_or_cancelled_2007
Description: Credits retired or canceled for a specific vintage year (2007).

// Fetch the 'credits_retired_or_cancelled_2007' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2007');

Field: credits_retired_or_cancelled_2008
Description: Credits retired or canceled for a specific vintage year (2008).

// Fetch the 'credits_retired_or_cancelled_2008' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2008');

Field: credits_retired_or_cancelled_2009
Description: Credits retired or canceled for a specific vintage year (2009).

// Fetch the 'credits_retired_or_cancelled_2009' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2009');

Field: credits_retired_or_cancelled_2010
Description: Credits retired or canceled for a specific vintage year (2010).

// Fetch the 'credits_retired_or_cancelled_2010' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2010');

Field: credits_retired_or_cancelled_2011
Description: Credits retired or canceled for a specific vintage year (2011).

// Fetch the 'credits_retired_or_cancelled_2011' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2011');

Field: credits_retired_or_cancelled_2012
Description: Credits retired or canceled for a specific vintage year (2012).

// Fetch the 'credits_retired_or_cancelled_2012' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2012');

Field: credits_retired_or_cancelled_2013
Description: Credits retired or canceled for a specific vintage year (2013).

// Fetch the 'credits_retired_or_cancelled_2013' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2013');

Field: credits_retired_or_cancelled_2014
Description: Credits retired or canceled for a specific vintage year (2014).

// Fetch the 'credits_retired_or_cancelled_2014' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2014');

Field: credits_retired_or_cancelled_2015
Description: Credits retired or canceled for a specific vintage year (2015).

// Fetch the 'credits_retired_or_cancelled_2015' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2015');

Field: credits_retired_or_cancelled_2016
Description: Credits retired or canceled for a specific vintage year (2016).

// Fetch the 'credits_retired_or_cancelled_2016' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2016');

Field: credits_retired_or_cancelled_2017
Description: Credits retired or canceled for a specific vintage year (2017).

// Fetch the 'credits_retired_or_cancelled_2017' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2017');

Field: credits_retired_or_cancelled_2018
Description: Credits retired or canceled for a specific vintage year (2018).

// Fetch the 'credits_retired_or_cancelled_2018' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2018');

Field: credits_retired_or_cancelled_2019
Description: Credits retired or canceled for a specific vintage year (2019).

// Fetch the 'credits_retired_or_cancelled_2019' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2019');

Field: credits_retired_or_cancelled_2020
Description: Credits retired or canceled for a specific vintage year (2020).

// Fetch the 'credits_retired_or_cancelled_2020' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2020');

Field: credits_retired_or_cancelled_2021
Description: Credits retired or canceled for a specific vintage year (2021).

// Fetch the 'credits_retired_or_cancelled_2021' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2021');

Field: credits_retired_or_cancelled_2022
Description: Credits retired or canceled for a specific vintage year (2022).

// Fetch the 'credits_retired_or_cancelled_2022' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2022');

Field: credits_retired_or_cancelled_2023
Description: Credits retired or canceled for a specific vintage year (2023).

// Fetch the 'credits_retired_or_cancelled_2023' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2023');

Field: credits_retired_or_cancelled_2024
Description: Credits retired or canceled for a specific vintage year (2024).

// Fetch the 'credits_retired_or_cancelled_2024' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2024');

Field: credits_retired_or_cancelled_2025
Description: Credits retired or canceled for a specific vintage year (2025).

// Fetch the 'credits_retired_or_cancelled_2025' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_2025');

Field: credits_retired_or_cancelled_year_unknown
Description: Credits retired or canceled with an unknown vintage year.

// Fetch the 'credits_retired_or_cancelled_year_unknown' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_retired_or_cancelled_year_unknown');

Field: credits_remaining_by_vintage_1996
Description: Credits remaining for a specific vintage year (1996).

// Fetch the 'credits_remaining_by_vintage_1996' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_1996');

Field: credits_remaining_by_vintage_1997
Description: Credits remaining for a specific vintage year (1997).

// Fetch the 'credits_remaining_by_vintage_1997' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_1997');

Field: credits_remaining_by_vintage_1998
Description: Credits remaining for a specific vintage year (1998).

// Fetch the 'credits_remaining_by_vintage_1998' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_1998');

Field: credits_remaining_by_vintage_1999
Description: Credits remaining for a specific vintage year (1999).

// Fetch the 'credits_remaining_by_vintage_1999' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_1999');

Field: credits_remaining_by_vintage_2000
Description: Credits remaining for a specific vintage year (2000).

// Fetch the 'credits_remaining_by_vintage_2000' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2000');

Field: credits_remaining_by_vintage_2001
Description: Credits remaining for a specific vintage year (2001).

// Fetch the 'credits_remaining_by_vintage_2001' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2001');

Field: credits_remaining_by_vintage_2002
Description: Credits remaining for a specific vintage year (2002).

// Fetch the 'credits_remaining_by_vintage_2002' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2002');

Field: credits_remaining_by_vintage_2003
Description: Credits remaining for a specific vintage year (2003).

// Fetch the 'credits_remaining_by_vintage_2003' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2003');

Field: credits_remaining_by_vintage_2004
Description: Credits remaining for a specific vintage year (2004).

// Fetch the 'credits_remaining_by_vintage_2004' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2004');

Field: credits_remaining_by_vintage_2005
Description: Credits remaining for a specific vintage year (2005).

// Fetch the 'credits_remaining_by_vintage_2005' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2005');

Field: credits_remaining_by_vintage_2006
Description: Credits remaining for a specific vintage year (2006).

// Fetch the 'credits_remaining_by_vintage_2006' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2006');

Field: credits_remaining_by_vintage_2007
Description: Credits remaining for a specific vintage year (2007).

// Fetch the 'credits_remaining_by_vintage_2007' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2007');

Field: credits_remaining_by_vintage_2008
Description: Credits remaining for a specific vintage year (2008).

// Fetch the 'credits_remaining_by_vintage_2008' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2008');

Field: credits_remaining_by_vintage_2009
Description: Credits remaining for a specific vintage year (2009).

// Fetch the 'credits_remaining_by_vintage_2009' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2009');

Field: credits_remaining_by_vintage_2010
Description: Credits remaining for a specific vintage year (2010).

// Fetch the 'credits_remaining_by_vintage_2010' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2010');

Field: credits_remaining_by_vintage_2011
Description: Credits remaining for a specific vintage year (2011).

// Fetch the 'credits_remaining_by_vintage_2011' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2011');

Field: credits_remaining_by_vintage_2012
Description: Credits remaining for a specific vintage year (2012).

// Fetch the 'credits_remaining_by_vintage_2012' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2012');

Field: credits_remaining_by_vintage_2013
Description: Credits remaining for a specific vintage year (2013).

// Fetch the 'credits_remaining_by_vintage_2013' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2013');

Field: credits_remaining_by_vintage_2014
Description: Credits remaining for a specific vintage year (2014).

// Fetch the 'credits_remaining_by_vintage_2014' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2014');

Field: credits_remaining_by_vintage_2015
Description: Credits remaining for a specific vintage year (2015).

// Fetch the 'credits_remaining_by_vintage_2015' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2015');

Field: credits_remaining_by_vintage_2016
Description: Credits remaining for a specific vintage year (2016).

// Fetch the 'credits_remaining_by_vintage_2016' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2016');

Field: credits_remaining_by_vintage_2017
Description: Credits remaining for a specific vintage year (2017).

// Fetch the 'credits_remaining_by_vintage_2017' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2017');

Field: credits_remaining_by_vintage_2018
Description: Credits remaining for a specific vintage year (2018).

// Fetch the 'credits_remaining_by_vintage_2018' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2018');

Field: credits_remaining_by_vintage_2019
Description: Credits remaining for a specific vintage year (2019).

// Fetch the 'credits_remaining_by_vintage_2019' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2019');

Field: credits_remaining_by_vintage_2020
Description: Credits remaining for a specific vintage year (2020).

// Fetch the 'credits_remaining_by_vintage_2020' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2020');

Field: credits_remaining_by_vintage_2021
Description: Credits remaining for a specific vintage year (2021).

// Fetch the 'credits_remaining_by_vintage_2021' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2021');

Field: credits_remaining_by_vintage_2022
Description: Credits remaining for a specific vintage year (2022).

// Fetch the 'credits_remaining_by_vintage_2022' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2022');

Field: credits_remaining_by_vintage_2023
Description: Credits remaining for a specific vintage year (2023).

// Fetch the 'credits_remaining_by_vintage_2023' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2023');

Field: credits_remaining_by_vintage_2024
Description: Credits remaining for a specific vintage year (2024).

// Fetch the 'credits_remaining_by_vintage_2024' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2024');

Field: credits_remaining_by_vintage_2025
Description: Credits remaining for a specific vintage year (2025).

// Fetch the 'credits_remaining_by_vintage_2025' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_remaining_by_vintage_2025');

Field: project_owner
Description: The owner of the project.

// Fetch the 'project_owner' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_owner');

Field: offset_project_operator
Description: The operator of the offset project.

// Fetch the 'offset_project_operator' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('offset_project_operator');

Field: authorized_roject_designee
Description: The authorized designee for the project.

// Fetch the 'authorized_roject_designee' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('authorized_roject_designee');

Field: verifier
Description: The third-party verifier of the project.

// Fetch the 'verifier' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('verifier');

Field: estimated_annual_emission_reductions
Description: The estimated yearly emission reductions.

// Fetch the 'estimated_annual_emission_reductions' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('estimated_annual_emission_reductions');

Field: pers
Description: A placeholder for an unknown field.

// Fetch the 'pers' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('pers');

Field: registry_arb_wa
Description: The specific ARB or WA registry.

// Fetch the 'registry_arb_wa' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('registry_arb_wa');

Field: arb_wa_status
Description: The project's status within the ARB or WA system.

// Fetch the 'arb_wa_status' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('arb_wa_status');

Field: arb_wa_id
Description: The unique ID for the project in the ARB or WA registry.

// Fetch the 'arb_wa_id' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('arb_wa_id');

Field: poa_aggregate_id
Description: The ID for a Program of Activities (PoA) or an aggregated project.

// Fetch the 'poa_aggregate_id' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('poa_aggregate_id');

Field: poa_vpa_status
Description: The status of the PoA/VPA.

// Fetch the 'poa_vpa_status' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('poa_vpa_status');

Field: corsia_eligible
Description: Indicates if the project is eligible for CORSIA (Carbon Offsetting and Reduction Scheme for International Aviation).

// Fetch the 'corsia_eligible' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('corsia_eligible');

Field: project_listed
Description: The date the project was listed on the registry.

// Fetch the 'project_listed' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_listed');

Field: project_registered
Description: The date the project was registered.

// Fetch the 'project_registered' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_registered');

Field: sustainability_certifications
Description: Any additional sustainability certifications the project has received.

// Fetch the 'sustainability_certifications' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('sustainability_certifications');

Field: project_type_from_the_registry
Description: The project type from the registry.

// Fetch the 'project_type_from_the_registry' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_type_from_the_registry');

Field: registry_documents
Description: A link or reference to documents on the registry.

// Fetch the 'registry_documents' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('registry_documents');

Field: project_website
Description: The official website for the project.

// Fetch the 'project_website' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_website');

Field: credits_issued_by_issuance_year_1996
Description: Credits issued in a specific calendar year (1996).

// Fetch the 'credits_issued_by_issuance_year_1996' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_1996');

Field: credits_issued_by_issuance_year_1997
Description: Credits issued in a specific calendar year (1997).

// Fetch the 'credits_issued_by_issuance_year_1997' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_1997');

Field: credits_issued_by_issuance_year_1998
Description: Credits issued in a specific calendar year (1998).

// Fetch the 'credits_issued_by_issuance_year_1998' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_1998');

Field: credits_issued_by_issuance_year_1999
Description: Credits issued in a specific calendar year (1999).

// Fetch the 'credits_issued_by_issuance_year_1999' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_1999');

Field: credits_issued_by_issuance_year_2000
Description: Credits issued in a specific calendar year (2000).

// Fetch the 'credits_issued_by_issuance_year_2000' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2000');

Field: credits_issued_by_issuance_year_2001
Description: Credits issued in a specific calendar year (2001).

// Fetch the 'credits_issued_by_issuance_year_2001' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2001');

Field: credits_issued_by_issuance_year_2002
Description: Credits issued in a specific calendar year (2002).

// Fetch the 'credits_issued_by_issuance_year_2002' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2002');

Field: credits_issued_by_issuance_year_2003
Description: Credits issued in a specific calendar year (2003).

// Fetch the 'credits_issued_by_issuance_year_2003' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2003');

Field: credits_issued_by_issuance_year_2004
Description: Credits issued in a specific calendar year (2004).

// Fetch the 'credits_issued_by_issuance_year_2004' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2004');

Field: credits_issued_by_issuance_year_2005
Description: Credits issued in a specific calendar year (2005).

// Fetch the 'credits_issued_by_issuance_year_2005' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2005');

Field: credits_issued_by_issuance_year_2006
Description: Credits issued in a specific calendar year (2006).

// Fetch the 'credits_issued_by_issuance_year_2006' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2006');

Field: credits_issued_by_issuance_year_2007
Description: Credits issued in a specific calendar year (2007).

// Fetch the 'credits_issued_by_issuance_year_2007' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2007');

Field: credits_issued by_issuance_year_2008
Description: Credits issued in a specific calendar year (2008).

// Fetch the 'credits_issued_by_issuance_year_2008' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2008');

Field: credits_issued_by_issuance_year_2009
Description: Credits issued in a specific calendar year (2009).

// Fetch the 'credits_issued_by_issuance_year_2009' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2009');

Field: credits_issued_by_issuance_year_2010
Description: Credits issued in a specific calendar year (2010).

// Fetch the 'credits_issued_by_issuance_year_2010' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2010');

Field: credits_issued_by_issuance_year_2011
Description: Credits issued in a specific calendar year (2011).

// Fetch the 'credits_issued_by_issuance_year_2011' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2011');

Field: credits_issued_by_issuance_year_2012
Description: Credits issued in a specific calendar year (2012).

// Fetch the 'credits_issued_by_issuance_year_2012' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2012');

Field: credits_issued_by_issuance_year_2013
Description: Credits issued in a specific calendar year (2013).

// Fetch the 'credits_issued_by_issuance_year_2013' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2013');

Field: credits_issued_by_issuance_year_2014
Description: Credits issued in a specific calendar year (2014).

// Fetch the 'credits_issued_by_issuance_year_2014' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2014');

Field: credits_issued_by_issuance_year_2015
Description: Credits issued in a specific calendar year (2015).

// Fetch the 'credits_issued_by_issuance_year_2015' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2015');

Field: credits_issued_by_issuance_year_2016
Description: Credits issued in a specific calendar year (2016).

// Fetch the 'credits_issued_by_issuance_year_2016' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2016');

Field: credits_issued_by_issuance_year_2017
Description: Credits issued in a specific calendar year (2017).

// Fetch the 'credits_issued_by_issuance_year_2017' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2017');

Field: credits_issued_by_issuance_year_2018
Description: Credits issued in a specific calendar year (2018).

// Fetch the 'credits_issued_by_issuance_year_2018' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2018');

Field: credits_issued_by_issuance_year_2019
Description: Credits issued in a specific calendar year (2019).

// Fetch the 'credits_issued_by_issuance_year_2019' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2019');

Field: credits_issued_by_issuance_year_2020
Description: Credits issued in a specific calendar year (2020).

// Fetch the 'credits_issued_by_issuance_year_2020' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2020');

Field: credits_issued_by_issuance_year_2021
Description: Credits issued in a specific calendar year (2021).

// Fetch the 'credits_issued_by_issuance_year_2021' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2021');

Field: credits_issued_by_issuance_year_2022
Description: Credits issued in a specific calendar year (2022).

// Fetch the 'credits_issued_by_issuance_year_2022' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2022');

Field: credits_issued_by_issuance_year_2023
Description: Credits issued in a specific calendar year (2023).

// Fetch the 'credits_issued_by_issuance_year_2023' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2023');

Field: credits_issued_by_issuance_year_2024
Description: Credits issued in a specific calendar year (2024).

// Fetch the 'credits_issued_by_issuance_year_2024' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2024');

Field: credits_issued_by_issuance_year_2025
Description: Credits issued in a specific calendar year (2025).

// Fetch the 'credits_issued_by_issuance_year_2025' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('credits_issued_by_issuance_year_2025');

Field: project_description
Description: A general description of the project.

// Fetch the 'project_description' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_description');

Field: notes_from_registry
Description: Any notes or comments from the registry.

// Fetch the 'notes_from_registry' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('notes_from_registry');

Field: notes_from_berkeley_carbon_trading_project
Description: Notes added by the Berkeley Carbon Trading Project.

// Fetch the 'notes_from_berkeley_carbon_trading_project' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('notes_from_berkeley_carbon_trading_project');

Field: date_project_added_to_database
Description: The date the project record was added to this database.

// Fetch the 'date_project_added_to_database' column
let { data: voluntaryregistryoffsets, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('date_project_added_to_database');
