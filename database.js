import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bblinccfemhicfhopvft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJibGluY2NmZW1oaWNmaG9wdmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzE0NzEsImV4cCI6MjA2MzAwNzQ3MX0.qj7Hr0z5WadfGTT1zKEe7oaw96TQwtXQoJ84XkWQ2bs';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchData(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }

async function insertDataToTable(data) {
    const { error } = await supabase
        .from('steamData')
        .insert(data);
}

async function updateTableWithApiData(apiUrl) {
    const data = await fetchData(apiUrl);
    await insertDataToTable(data);
  }
  
updateTableWithApiData('https://www.cheapshark.com/api/1.0/deals?storeID=1');


  