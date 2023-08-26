import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
//css
import styles from './CategoriesPage.module.css';
//components module
import Card from '../module/Card';

const CategoriesPage = ({ data }) => {

    const router = useRouter();
    const [query, setQuery] = useState({ difficulty: "", time: "" });

    useEffect(() => {
        const {difficulty, time} = router.query;
        if(query.difficulty !== difficulty || query.time !== time ) {
            setQuery({difficulty, time});
        }
    }, []);

    const chaneHandler = (e) => {
        setQuery({ ... query, [e.target.name]: e.target.value});
    };

    const clickHandler = () => {
        router.push({
            pathname: "/categories",
            query,
        });
    };
    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.subContainer}>
                <div className={styles.select}>
                    <select value={query.difficulty} name="difficulty" onChange={chaneHandler}>
                        <option value={""}>Difficulty</option>
                        <option value={"Easy"}>Easy</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"Hard"}>Hard</option>
                    </select>
                    <select value={query.time} name="time" onChange={chaneHandler}>
                        <option value={""}>Cooking Time</option>
                        <option value={"More"}>More than 30 min</option>
                        <option value={"Less"}>Less than 30 min</option>
                    </select>
                    <button onClick={clickHandler}>Search</button>
                </div>
                <div className={styles.cards}>
                    {
                        !data.length ? <img src='/images/search.png' alt='categories' />
                        : null
                    }
                    {
                        data.map((food) => <Card key={food.id} { ...food } />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;