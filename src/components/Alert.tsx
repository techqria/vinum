import React, { useState, useEffect } from "react"

export const Alert: React.FC<any> = ({older, setOlder}) => {

    useEffect(() => {
        if(older) localStorage.setItem('older', 'true')
    }, [older])

    return (
        <section className="position-fixed bg-dark alert-card p-5 flex-column" style={{ display: older ? 'none' : 'flex' }}>
            <h2 className="text-white">Você é maior de 18 anos?</h2>
            <div className="d-flex flex-column">
                <div className="d-flex gap-3 justify-content-center mt-3">
                    <button onClick={e => alert('Você não tem permissão para navegar neste site')} className="btn btn-danger">Não</button>
                    <button onClick={e => setOlder(true)} className="btn btn-success">Sim</button>
                </div>
            </div>
        </section>
    )
}