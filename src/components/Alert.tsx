import React, { useState } from "react"

export const Alert: React.FC<any> = ({older, setOlder}) => {

    return (
        <section className="position-fixed bg-dark alert-card p-5 flex-column" style={{ display: older ? 'none' : 'flex' }}>
            <h1 className="text-white">Você é maior de 18 anos?</h1>
            <div className="d-flex flex-column">
                <div className="d-flex gap-3 justify-content-center mt-3">
                    <button onClick={e => alert('Você não tem permissão para navegar neste site')} className="btn btn-danger">Não</button>
                    <button onClick={e => setOlder(true)} className="btn btn-success">Sim</button>
                </div>
            </div>
        </section>
    )
}