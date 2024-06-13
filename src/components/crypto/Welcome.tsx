type welComePropType={
    language:"fa"|"en";
}
export default function Welcome({language}:welComePropType){
    if(language==="fa"){
        return <div>
            Farsi
        </div>
    }
    else {
        return  <div>
            English
        </div>;
    }
}