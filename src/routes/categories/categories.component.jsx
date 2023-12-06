import "./categories.styles.scss";

const Categories = () => {
    return (
        <div className="categories-container">
            <div className="block">
                <h3 className="title">Мастер классы</h3>
                <ul className="master-class">
                    <li>
                        <label>
                            <input type="checkbox" />
                            МК Ваагна Тадевосяна 1
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            МК Ваагна Тадевосяна 2
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            МК Екатерины Переломовой и ансамбля Хайям
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            МК Любовь Захарченко
                        </label>
                    </li>
                </ul>
            </div>
            <div className="block">
                <h3 className="title">Оркестры под CD</h3>
                <ul className="orkestr-cd">
                    <li>1</li>
                </ul>
            </div>
            <div className="block">
                <h3 className="title">Номинации под CD</h3>
                <ul className="nomination-cd">
                    <li>1</li>
                </ul>
            </div>
        </div>
    );
};
export default Categories;
