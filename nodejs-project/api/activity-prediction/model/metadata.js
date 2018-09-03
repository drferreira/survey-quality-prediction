'use strict';

class Metadata{
    static deserialize(json){
        var metadata = new Metadata();
        metadata.value = json.value;
        return metadata;
    }
};

module.exports = Metadata;