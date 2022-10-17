import React from "react";
import { Link } from 'react-router-dom';

export const Pagination = () => {
    return (
        <section>
            <nav className="mt-5">
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" aria-disabled="true">Anterior</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Próximo</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}