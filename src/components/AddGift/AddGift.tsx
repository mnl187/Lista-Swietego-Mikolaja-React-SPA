import React, {FormEvent, useState} from 'react';
import { CreateGiftReq } from 'types';
import {Spinner} from "../common/Spinner/Spinner";

export const AddGift = () => {
    const [form, setForm] = useState<CreateGiftReq>({
        name: '',
        count: 0,
    });

    const [loading, setLoading] = useState<boolean>(false);

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
           [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        const res = await fetch(`http://localhost:3001/gift`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })
    }

    if (loading) {
        return <Spinner/>
    }
    
    return <form onSubmit={sendForm}>
        <h2>Add Gift</h2>
        <p>

            <label>
                Name <br/>
                <input type="text"
                       value={form.name}
                       onChange={e  => updateForm('name', e.target.value)}/>
            </label>
        </p>
        <p>

            <label>
                Count <br/>
                <input type="number"
                       value={form.count}
                       onChange={e  => updateForm('count', Number(e.target.value))}/>
            </label>
        </p>
        <button type="submit">Add</button>
    </form>
};
