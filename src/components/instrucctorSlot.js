import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import AddInstructor from './addInstructor';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './instructorSlot.css';

function InstructorSlot() {
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [personName, setPersonName] = useState([]);
    const commingDays = ['monday', 'tuesday']
    const [day, setDay] = useState(commingDays);
    const days = ['monday', 'tuesday', 'wednesday', 'thuresday', 'friday', 'saturday', 'sunday'];
    // console.log(day);
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];

    function addInstructor() {
        setIsOpenModel(true);
    }

    function handleClose() {
        setIsOpenModel(false);
    }
    const handleChange = (event) => {
      setPersonName(event.target.value);
    };

    const handleAddInstructor = () => {
        //TODO: api call
        setIsOpenModel(false);
    }
    const addDay = () => {
        if(day.length < 7) {
            day.forEach( element=> {
                days.forEach(ele => {
                    if(ele === element) {
                        days.splice(days.indexOf(ele),1);
                    }
                });
            });
        }
        const p = days[0];
        day.push(p);
        setDay(day);
        
    }

    function Slot({
        day
    }) {
        return day.map((day)=>{
            return <div className='slotWrapper'>
                <span className='slotDay'>{day}</span>
                <span>
                    <span className='slot'>11:45 <ImCross /></span>
                </span>
            </div>
        })
    }

    console.log('llll', day);
    
    return (
        <>
            <div className='wrapper'>
                <select>
                    <option>Category</option>
                    <option>dance</option>
                    <option>music</option>
                    <option>acting</option>
                </select>
                <select>
                    <option>Instructor</option>
                    <option>Hello</option>
                    <option>Ram</option>
                    <option>Ram</option>
                </select>
                <button onClick={addInstructor}>Add</button>

                {day && <Slot day={day}/>}

                <div className='btn-wrapper'>
                    <button className='btn' onClick={addDay}>+</button>
                    <span className='text-btn'>add day</span>
                </div>
                {
                    isOpenModel?
                    <>
                       <AddInstructor 
                            isOpenModel={isOpenModel}
                            handleClose={handleClose}
                            personName={personName} 
                            handleChange={handleChange}
                            handleAddInstructor={handleAddInstructor}
                        />
                    </> : null
                }

            </div>
        </>
    )
}

export default InstructorSlot;