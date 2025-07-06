import React, { useEffect, useState } from "react";
import Loader from "./Loader";




const CheckBox = () => {
    const [checkedSymptoms, setCheckedSymptoms] = useState([]);
    const [responseData, setResponseData] = useState(null);

    
    const ResponseModal = ({ disease, description, precautions, medications, diet, workout, onClose }) => {
        const [showLoader, setShowLoader] = useState(true);
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setShowLoader(false);
            }, 1000);
    
            return () => clearTimeout(timer);
        }, []);
    
        return (
            <div className="modal-wrapper">
                <div className="backdrop"></div>
                <div className="modal">
                    <div className="modal-content">
                        {showLoader ? (
                            <Loader />
                        ) : (
                            <div className="card">
                                <div className="card-header">
                                    <span className="close" onClick={onClose}>&times;</span>
                                    <h2 className="disease-heading">Diagnosed Disease: {disease}</h2>
                                    <h3 className="description">{description}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="details">
                                        <div className="precautions">
                                            <h3>Precautions</h3>
                                            <ul>
                                                {precautions && precautions.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="medications">
                                            <h3>Medications</h3>
                                            <ul>
                                                {medications && medications.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="diet">
                                            <h3>Preferred Diet</h3>
                                            <ul>
                                                {diet && diet.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="workout">
                                            <h3>Workout</h3>
                                            <ul>
                                                {workout && workout.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };
    
    
    
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedSymptoms([...checkedSymptoms, String(value)]);
        } else {
            setCheckedSymptoms(checkedSymptoms.filter(symptom => symptom !== String(value)));
        }
        console.log(checkedSymptoms);
    };
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (checkedSymptoms.length === 0) {
            window.alert('Please select at least one symptom.');
            return; 
        }
        const data = {
            symptoms : checkedSymptoms
        };

        try {
            const response = await fetch('https://disease-predicton-and-diagnosis-machine.onrender.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        
            if (!response.ok) {
                throw new Error('Failed to send data to the server');
            }
        
            const responseData = await response.json();
            setResponseData(responseData);
            console.log('Response from server:', responseData);
        } catch (error) {
            window.alert('An error has occurred. Please try again later.');
            console.log(error);
            window.location.reload();
        }
        
    };
    const handleCloseModal = () => {
        setResponseData(null);
        window.location.reload();
    };
  return (
    
      <div className="my-container">
                <h1>Disease Prediction and Diagnosis Tool</h1>
                <h3>Simply select all the symptoms you are experiencing and click the "Submit" button.</h3>
                <form id="symptom-form">
        <div className="checkbox-group">
        <h2>General Symptoms</h2>
            <div className="symptoms box">
                <div className="eight">
                <label><input type='checkbox' name='symptom' value='itching' onChange={handleCheckboxChange}/>Itching</label>
                <label><input type='checkbox' name='symptom' value='skin_rash' onChange={handleCheckboxChange}/>Skin Rash</label>
                <label><input type='checkbox' name='symptom' value='nodal_skin_eruptions' onChange={handleCheckboxChange}/>Nodal Skin Eruptions</label>
                <label><input type='checkbox' name='symptom' value='continuous_sneezing' onChange={handleCheckboxChange}/>Continuous Sneezing</label>
                <label><input type='checkbox' name='symptom' value='shivering' onChange={handleCheckboxChange}/>Shivering</label>
                <label><input type='checkbox' name='symptom' value='chills' onChange={handleCheckboxChange}/>Chills</label>
                <label><input type='checkbox' name='symptom' value='joint_pain' onChange={handleCheckboxChange}/>Joint Pain</label>
                <label><input type='checkbox' name='symptom' value='stomach_pain' onChange={handleCheckboxChange}/>Stomach Pain</label>
                <label><input type='checkbox' name='symptom' value='acidity' onChange={handleCheckboxChange}/>Acidity</label>
                </div>

                <div className="eight">
                <label><input type='checkbox' name='symptom' value='ulcers_on_tongue' onChange={handleCheckboxChange}/>Ulcers On Tongue</label>
                <label><input type='checkbox' name='symptom' value='muscle_wasting' onChange={handleCheckboxChange}/>Muscle Wasting</label>
                <label><input type='checkbox' name='symptom' value='vomiting' onChange={handleCheckboxChange}/>Vomiting</label>
                <label><input type='checkbox' name='symptom' value='burning_micturition' onChange={handleCheckboxChange}/>Burning Micturition</label>
                <label><input type='checkbox' name='symptom' value='spotting_urination' onChange={handleCheckboxChange}/>Spotting Urination</label>
                <label><input type='checkbox' name='symptom' value='fatigue' onChange={handleCheckboxChange}/>Fatigue</label>
                <label><input type='checkbox' name='symptom' value='weight_gain' onChange={handleCheckboxChange}/>Weight Gain</label>
                <label><input type='checkbox' name='symptom' value='anxiety' onChange={handleCheckboxChange}/>Anxiety</label>
                <label><input type='checkbox' name='symptom' value='cold_hands_and_feets' onChange={handleCheckboxChange}/>Cold Hands And Feets</label>
                <label><input type='checkbox' name='symptom' value='mood_swings' onChange={handleCheckboxChange}/>Mood Swings</label>
                </div>

                <div className="eight">
                <label><input type='checkbox' name='symptom' value='weight_loss' onChange={handleCheckboxChange}/>Weight Loss</label>
                <label><input type='checkbox' name='symptom' value='restlessness' onChange={handleCheckboxChange}/>Restlessness</label>
                <label><input type='checkbox' name='symptom' value='lethargy' onChange={handleCheckboxChange}/>Lethargy</label>
                <label><input type='checkbox' name='symptom' value='patches_in_throat' onChange={handleCheckboxChange}/>Patches In Throat</label>
                <label><input type='checkbox' name='symptom' value='irregular_sugar_level' onChange={handleCheckboxChange}/>Irregular Sugar Level</label>
                <label><input type='checkbox' name='symptom' value='cough' onChange={handleCheckboxChange}/>Cough</label>
                <label><input type='checkbox' name='symptom' value='high_fever' onChange={handleCheckboxChange}/>High Fever</label>
                <label><input type='checkbox' name='symptom' value='sunken_eyes' onChange={handleCheckboxChange}/>Sunken Eyes</label>
                <label><input type='checkbox' name='symptom' value='breathlessness' onChange={handleCheckboxChange}/>Breathlessness</label>

                </div>
            </div>
            <h2>Respiratory Symptoms</h2>
            <div className="symptoms box">
                <div className="eight">
                <label><input type='checkbox' name='symptom' value='sweating' onChange={handleCheckboxChange}/>Sweating</label>
                <label><input type='checkbox' name='symptom' value='dehydration' onChange={handleCheckboxChange}/>Dehydration</label>
                <label><input type='checkbox' name='symptom' value='indigestion' onChange={handleCheckboxChange}/>Indigestion</label>
                <label><input type='checkbox' name='symptom' value='headache' onChange={handleCheckboxChange}/>Headache</label>
                <label><input type='checkbox' name='symptom' value='yellowish_skin' onChange={handleCheckboxChange}/>Yellowish Skin</label>
                <label><input type='checkbox' name='symptom' value='dark_urine' onChange={handleCheckboxChange}/>Dark Urine</label>
                <label><input type='checkbox' name='symptom' value='nausea' onChange={handleCheckboxChange}/>Nausea</label>
                <label><input type='checkbox' name='symptom' value='loss_of_appetite' onChange={handleCheckboxChange}/>Loss Of Appetite</label>
                <label><input type='checkbox' name='symptom' value='pain_behind_the_eyes' onChange={handleCheckboxChange}/>Pain Behind The Eyes</label>
                <label><input type='checkbox' name='symptom' value='back_pain' onChange={handleCheckboxChange}/>Back Pain</label>
                <label><input type='checkbox' name='symptom' value='constipation' onChange={handleCheckboxChange}/>Constipation</label>
                </div>
                <div className="eight">
                <label><input type='checkbox' name='symptom' value='abdominal_pain' onChange={handleCheckboxChange}/>Abdominal Pain</label>
                <label><input type='checkbox' name='symptom' value='diarrhoea' onChange={handleCheckboxChange}/>Diarrhoea</label>
                <label><input type='checkbox' name='symptom' value='mild_fever' onChange={handleCheckboxChange}/>Mild Fever</label>
                <label><input type='checkbox' name='symptom' value='yellow_urine' onChange={handleCheckboxChange}/>Yellow Urine</label>
                <label><input type='checkbox' name='symptom' value='yellowing_of_eyes' onChange={handleCheckboxChange}/>Yellowing Of Eyes</label>
                <label><input type='checkbox' name='symptom' value='acute_liver_failure' onChange={handleCheckboxChange}/>Acute Liver Failure</label>
                <label><input type='checkbox' name='symptom' value='fluid_overload' onChange={handleCheckboxChange}/>Fluid Overload</label>
                <label><input type='checkbox' name='symptom' value='swelling_of_stomach' onChange={handleCheckboxChange}/>Swelling Of Stomach</label>
                <label><input type='checkbox' name='symptom' value='swelled_lymph_nodes' onChange={handleCheckboxChange}/>Swelled Lymph Nodes</label>
                <label><input type='checkbox' name='symptom' value='lack_of_concentration' onChange={handleCheckboxChange}/>Lack Of Concentration</label>
                
                </div>
                <div className="eight">
                <label><input type='checkbox' name='symptom' value='dischromic_patches' onChange={handleCheckboxChange}/>Dischromic Patches</label>
                <label><input type='checkbox' name='symptom' value='watering_from_eyes' onChange={handleCheckboxChange}/>Watering From Eyes</label>
                <label><input type='checkbox' name='symptom' value='increased_appetite' onChange={handleCheckboxChange}/>Increased Appetite</label>
                <label><input type='checkbox' name='symptom' value='polyuria' onChange={handleCheckboxChange}/>Polyuria</label>
                <label><input type='checkbox' name='symptom' value='family_history' onChange={handleCheckboxChange}/>Family History</label>
                <label><input type='checkbox' name='symptom' value='mucoid_sputum' onChange={handleCheckboxChange}/>Mucoid Sputum</label>
                <label><input type='checkbox' name='symptom' value='rusty_sputum' onChange={handleCheckboxChange}/>Rusty Sputum</label>
                <label><input type='checkbox' name='symptom' value='visual_disturbances' onChange={handleCheckboxChange}/>Visual Disturbances</label>
                <label><input type='checkbox' name='symptom' value='receiving_blood_transfusion' onChange={handleCheckboxChange}/>Receiving Blood Transfusion</label>
                <label><input type='checkbox' name='symptom' value='receiving_unsterile_injections' onChange={handleCheckboxChange}/>Receiving Unsterile Injections</label>
                <label><input type='checkbox' name='symptom' value='coma' onChange={handleCheckboxChange}/>Coma</label>
                </div>
            </div>
            <h2>Gastrointestinal Symptoms</h2>
            <div className="symptoms box">
                
                <div className="eight">
                <label><input type='checkbox' name='symptom' value='malaise' onChange={handleCheckboxChange}/>Malaise</label>
                <label><input type='checkbox' name='symptom' value='blurred_and_distorted_vision' onChange={handleCheckboxChange}/>Blurred And Distorted Vision</label>
                <label><input type='checkbox' name='symptom' value='phlegm' onChange={handleCheckboxChange}/>Phlegm</label>
                <label><input type='checkbox' name='symptom' value='throat_irritation' onChange={handleCheckboxChange}/>Throat Irritation</label>
                <label><input type='checkbox' name='symptom' value='redness_of_eyes' onChange={handleCheckboxChange}/>Redness Of Eyes</label>
                <label><input type='checkbox' name='symptom' value='sinus_pressure' onChange={handleCheckboxChange}/>Sinus Pressure</label>
                <label><input type='checkbox' name='symptom' value='runny_nose' onChange={handleCheckboxChange}/>Runny Nose</label>
                <label><input type='checkbox' name='symptom' value='congestion' onChange={handleCheckboxChange}/>Congestion</label>
                <label><input type='checkbox' name='symptom' value='chest_pain' onChange={handleCheckboxChange}/>Chest Pain</label>
                <label><input type='checkbox' name='symptom' value='weakness_in_limbs' onChange={handleCheckboxChange}/>Weakness In Limbs</label>
                <label><input type='checkbox' name='symptom' value='fast_heart_rate' onChange={handleCheckboxChange}/>Fast Heart Rate</label>

                </div>
                <div className="eight">
                <label><input type='checkbox' name='symptom' value='pain_during_bowel_movements' onChange={handleCheckboxChange}/>Pain During Bowel Movements</label>
                <label><input type='checkbox' name='symptom' value='pain_in_anal_region' onChange={handleCheckboxChange}/>Pain In Anal Region</label>
                <label><input type='checkbox' name='symptom' value='bloody_stool' onChange={handleCheckboxChange}/>Bloody Stool</label>
                <label><input type='checkbox' name='symptom' value='irritation_in_anus' onChange={handleCheckboxChange}/>Irritation In Anus</label>
                <label><input type='checkbox' name='symptom' value='neck_pain' onChange={handleCheckboxChange}/>Neck Pain</label>
                <label><input type='checkbox' name='symptom' value='dizziness' onChange={handleCheckboxChange}/>Dizziness</label>
                <label><input type='checkbox' name='symptom' value='cramps' onChange={handleCheckboxChange}/>Cramps</label>
                <label><input type='checkbox' name='symptom' value='bruising' onChange={handleCheckboxChange}/>Bruising</label>
                <label><input type='checkbox' name='symptom' value='obesity' onChange={handleCheckboxChange}/>Obesity</label>
                <label><input type='checkbox' name='symptom' value='swollen_legs' onChange={handleCheckboxChange}/>Swollen Legs</label>


                </div>
                <div className="eight">
                <label><input type='checkbox' name='symptom' value='stomach_bleeding' onChange={handleCheckboxChange}/>Stomach Bleeding</label>
                <label><input type='checkbox' name='symptom' value='distention_of_abdomen' onChange={handleCheckboxChange}/>Distention Of Abdomen</label>
                <label><input type='checkbox' name='symptom' value='history_of_alcohol_consumption' onChange={handleCheckboxChange}/>History Of Alcohol Consumption</label>
                <label><input type='checkbox' name='symptom' value='fluid_overload' onChange={handleCheckboxChange}/>Fluid Overload</label>
                <label><input type='checkbox' name='symptom' value='blood_in_sputum' onChange={handleCheckboxChange}/>Blood In Sputum</label>
                <label><input type='checkbox' name='symptom' value='prominent_veins_on_calf' onChange={handleCheckboxChange}/>Prominent Veins On Calf</label>
                <label><input type='checkbox' name='symptom' value='palpitations' onChange={handleCheckboxChange}/>Palpitations</label>
                <label><input type='checkbox' name='symptom' value='painful_walking' onChange={handleCheckboxChange}/>Painful Walking</label>
                <label><input type='checkbox' name='symptom' value='pus_filled_pimples' onChange={handleCheckboxChange}/>Pus Filled Pimples</label>



                </div>
                
            </div>
            <h2>Musculoskeletal Symptoms</h2>
            <div className="symptoms box">
                
                <div className="eight"> 
                <label><input type='checkbox' name='symptom' value='swollen_blood_vessels' onChange={handleCheckboxChange}/>Swollen Blood Vessels</label>
                <label><input type='checkbox' name='symptom' value='puffy_face_and_eyes' onChange={handleCheckboxChange}/>Puffy Face And Eyes</label>
                <label><input type='checkbox' name='symptom' value='enlarged_thyroid' onChange={handleCheckboxChange}/>Enlarged Thyroid</label>
                <label><input type='checkbox' name='symptom' value='brittle_nails' onChange={handleCheckboxChange}/>Brittle Nails</label>
                <label><input type='checkbox' name='symptom' value='swollen_extremeties' onChange={handleCheckboxChange}/>Swollen Extremeties</label>
                <label><input type='checkbox' name='symptom' value='excessive_hunger' onChange={handleCheckboxChange}/>Excessive Hunger</label>
                <label><input type='checkbox' name='symptom' value='extra_marital_contacts' onChange={handleCheckboxChange}/>Extra Marital Contacts</label>
                <label><input type='checkbox' name='symptom' value='drying_and_tingling_lips' onChange={handleCheckboxChange}/>Drying And Tingling Lips</label>
                <label><input type='checkbox' name='symptom' value='slurred_speech' onChange={handleCheckboxChange}/>Slurred Speech</label>
                <label><input type='checkbox' name='symptom' value='knee_pain' onChange={handleCheckboxChange}/>Knee Pain</label>
                <label><input type='checkbox' name='symptom' value='hip_joint_pain' onChange={handleCheckboxChange}/>Hip Joint Pain</label>

                </div>
                <div className="eight"> 
                <label><input type='checkbox' name='symptom' value='continuous_feel_of_urine' onChange={handleCheckboxChange}/>Continuous Feel Of Urine</label>
                <label><input type='checkbox' name='symptom' value='passage_of_gases' onChange={handleCheckboxChange}/>Passage Of Gases</label>
                <label><input type='checkbox' name='symptom' value='internal_itching' onChange={handleCheckboxChange}/>Internal Itching</label>
                <label><input type='checkbox' name='symptom' value='toxic_look_typhos' onChange={handleCheckboxChange}/>Toxic Look Typhos</label>
                <label><input type='checkbox' name='symptom' value='depression' onChange={handleCheckboxChange}/>Depression</label>
                <label><input type='checkbox' name='symptom' value='irritability' onChange={handleCheckboxChange}/>Irritability</label>
                <label><input type='checkbox' name='symptom' value='muscle_pain' onChange={handleCheckboxChange}/>Muscle Pain</label>
                <label><input type='checkbox' name='symptom' value='altered_sensorium' onChange={handleCheckboxChange}/>Altered Sensorium</label>
                <label><input type='checkbox' name='symptom' value='red_spots_over_body' onChange={handleCheckboxChange}/>Red Spots Over Body</label>
                <label><input type='checkbox' name='symptom' value='belly_pain' onChange={handleCheckboxChange}/>Belly Pain</label>
                <label><input type='checkbox' name='symptom' value='abnormal_menstruation' onChange={handleCheckboxChange}/>Abnormal Menstruation</label>



                </div>
               
            </div>
            <h2>Other Symptoms</h2>
            <div className="symptoms box">
            <div className="eight">
            <label><input type='checkbox' name='symptom' value='muscle_weakness' onChange={handleCheckboxChange}/>Muscle Weakness</label>
            <label><input type='checkbox' name='symptom' value='stiff_neck' onChange={handleCheckboxChange}/>Stiff Neck</label>
            <label><input type='checkbox' name='symptom' value='swelling_joints' onChange={handleCheckboxChange}/>Swelling Joints</label>
            <label><input type='checkbox' name='symptom' value='movement_stiffness' onChange={handleCheckboxChange}/>Movement Stiffness</label>
            <label><input type='checkbox' name='symptom' value='spinning_movements' onChange={handleCheckboxChange}/>Spinning Movements</label>
            <label><input type='checkbox' name='symptom' value='loss_of_balance' onChange={handleCheckboxChange}/>Loss Of Balance</label>
            <label><input type='checkbox' name='symptom' value='unsteadiness' onChange={handleCheckboxChange}/>Unsteadiness</label>
            <label><input type='checkbox' name='symptom' value='weakness_of_one_body_side' onChange={handleCheckboxChange}/>Weakness Of One Body Side</label>
            <label><input type='checkbox' name='symptom' value='loss_of_smell' onChange={handleCheckboxChange}/>Loss Of Smell</label>
            <label><input type='checkbox' name='symptom' value='bladder_discomfort' onChange={handleCheckboxChange}/>Bladder Discomfort</label>
            <label><input type='checkbox' name='symptom' value='foul_smell_ofurine' onChange={handleCheckboxChange}/>Foul Smell Ofurine</label>
            </div>
            
            <div className="eight">
                <label><input type="checkbox" name="symptom" value="foul_smell_of urine" onChange={handleCheckboxChange}/> Foul smell of urine </label>
                <label><input type="checkbox" name="symptom" value="weakness_of_one_body_side" onChange={handleCheckboxChange}/> Weakness of one body side </label>
                <label><input type="checkbox" name="symptom" value="continuous_feel_of_urine" onChange={handleCheckboxChange}/> Continuous Feel of urine </label>
                <label><input type="checkbox" name="symptom" value="toxic_look_(typhos)" onChange={handleCheckboxChange}/> Toxic Look </label>
                <label><input type="checkbox" name="symptom" value="depression" onChange={handleCheckboxChange}/> Depression </label>
                <label><input type="checkbox" name="symptom" value="irritability" onChange={handleCheckboxChange}/> Irritability </label>
                <label><input type="checkbox" name="symptom" value="altered_sensorium" onChange={handleCheckboxChange}/> Altered Sensorium  </label>
                <label><input type="checkbox" name="symptom" value="abnormal_menstruation" onChange={handleCheckboxChange}/> Abnormal menstruation  </label>
                
            </div>
            <div className="eight">
            <label><input type='checkbox' name='symptom' value='blackheads' onChange={handleCheckboxChange}/>Blackheads</label>
            <label><input type='checkbox' name='symptom' value='scurring' onChange={handleCheckboxChange}/>Scurring</label>
            <label><input type='checkbox' name='symptom' value='skin_peeling' onChange={handleCheckboxChange}/>Skin Peeling</label>
            <label><input type='checkbox' name='symptom' value='silver_like_dusting' onChange={handleCheckboxChange}/>Silver Like Dusting</label>
            <label><input type='checkbox' name='symptom' value='small_dents_in_nails' onChange={handleCheckboxChange}/>Small Dents In Nails</label>
            <label><input type='checkbox' name='symptom' value='inflammatory_nails' onChange={handleCheckboxChange}/>Inflammatory Nails</label>
            <label><input type='checkbox' name='symptom' value='blister' onChange={handleCheckboxChange}/>Blister</label>
            <label><input type='checkbox' name='symptom' value='red_sore_around_nose' onChange={handleCheckboxChange}/>Red Sore Around Nose</label>
            <label><input type='checkbox' name='symptom' value='yellow_crust_ooze' onChange={handleCheckboxChange}/>Yellow Crust Ooze</label>
                
            </div>
            </div>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn-submit">Submit</button>
    </form>
    {responseData && (
                <ResponseModal 
                    disease={responseData.disease}
                    description = {responseData.description}
                    precautions = {responseData.precautions}
                    medications = {responseData.medications}
                    diet={responseData.diet}
                    workout={responseData.workout}
                    onClose={handleCloseModal}
                />
            )}
            </div>
    
  );
};

export default CheckBox;