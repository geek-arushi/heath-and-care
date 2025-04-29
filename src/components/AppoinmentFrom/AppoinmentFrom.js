import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const AppoinmentFrom = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        dept: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                phone: '',
                age: '',
                gender: '',
                dept: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form method="post" className="contact-validation-active" onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="form-field col-lg-6">
                    <input
                        value={forms.name}
                        type="text"
                        name="name"
                        className="form-control-name"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Full Name" />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>
                <div className="form-field col-lg-6">
                    <input
                        value={forms.email}
                        type="email"
                        className="form-control-mail"
                        name="email"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Your Email" />
                    {validator.message('email', forms.email, 'required|email')}
                </div>
                <div className="form-field col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <input
                                value={forms.phone}
                                type="phone"
                                name="phone"
                                className="form-controls form-control-number "
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Your phone" />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="form-control-age col-lg-6">
                                    <select
                                        onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)}
                                        value={forms.age}
                                        type="text"
                                        className="form-control valid"
                                        name="age">
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                        <option>32</option>
                                        <option>33</option>
                                    </select>
                                    {validator.message('age', forms.age, 'required')}
                                </div>
                                <div className="form-controls form-control-gender col-lg-6">
                                    <select
                                        onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)}
                                        value={forms.gender}
                                        type="text"
                                        className="form-control valid"
                                        name="gender">
                                        <option>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    {validator.message('gender', forms.gender, 'required')}
                                </div>
                            </div>
                        </div>
                        <div className="form-controls form-control-choose-department col-lg-12">
                            <select
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                value={forms.dept}
                                type="text"
                                className="form-control valid"
                                name="dept">
                                <option disabled="disabled">Choose Department</option>
                                <option>Biotechnology</option>
                                <option>Facility Services & Supplies</option>
                                <option>Government & Education</option>
                                <option>Healthcare Providers</option>
                                <option>Management Consulting</option>
                            </select>
                            {validator.message('Department', forms.dept, 'required')}
                        </div>
                        <div className="col-xl-12 col-lg-12 col-12">
                            <div className="submit-area">
                                <button type="submit" className="theme-btn">Book Appoinment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AppoinmentFrom;