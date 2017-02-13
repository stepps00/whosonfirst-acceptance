var get_record = require('./get_record.js')
// pulling everything together
function condition(recordid, belongsto_ids)
{
    var result = get_record.get_record_from_disk(recordid.toString())
    function belongsto(id)
    {
    return result.properties["wof:belongsto"].indexOf(id) !== -1
    }
    if (belongsto_ids.every(belongsto)) {
    	console.log('WOOHOO')
    }
    	else {console.log('BOOHOO')
    }
}

condition(1108730699, [102191581, 85633287, 85688877])

