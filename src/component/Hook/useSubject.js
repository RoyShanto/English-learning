import React, { useEffect, useState } from 'react';

const useSubject = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./Mydata.json')
            .then(req => req.json())
            .then(data => setSubjects(data))
    }, []);
    return [subjects];
};

export default useSubject;