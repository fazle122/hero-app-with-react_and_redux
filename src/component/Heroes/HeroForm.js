import React from 'react';
import TextInput from '../../Common/TextInput';

const HeroForm = ({ hero, allAuthors, onSave, onChange, loading, errors }) => {
    return (
        <form>
            <TextInput
                name="name"
                label="name"
                value={hero.name}
                onChange={onChange}
            // error={errors.title}
            />

            <input
                type="submit"
                disabled={loading}
                value={loading ? 'saving...' : 'save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>

    );
};

export default HeroForm;