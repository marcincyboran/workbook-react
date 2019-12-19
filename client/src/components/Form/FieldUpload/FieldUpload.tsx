import React, { ChangeEvent, useState, DragEvent } from 'react';
import './FieldUpload.scss';
import classes from 'react-style-classes';
import SvgSprite from '../../UI/SvgSprite/SvgSprite';
import Thumbnail from '../../../components/Thumbnail/Thumbnail';
import Validators from '../../../helpers/validators';
import CONSTANTS from '../../../helpers/constants';
import { InfoType } from '../../../helpers/types';

type FieldUploadProps = {
    // value?: File[]
    onUpload: (files: File[]) => void;
};

const FieldUpload: React.FC<FieldUploadProps> = ({ onUpload }) => {
    const [files, setFiles] = useState<File[]>([]);
    const [info, setInfo] = useState<InfoType | null>();

    const save = async (add: File[]) => {
        setInfo(null);

        // Filter duplicated files
        const fileNames = files.map(file => file.name);
        add = add.filter(file => !fileNames.includes(file.name));

        // Validate format
        const isValidArr = await Promise.all(add.map(async file => Validators.validateImages(file)));
        if (isValidArr.some(el => el === false)) return setInfo({ type: 'error', msg: 'Invalid file format' });

        // Validate size
        if (add.some(el => el.size > CONSTANTS.MAX_FILE_SIZE))
            return setInfo({ type: 'error', msg: 'Image size is too big' });

        const finalFiles = [...files, ...add];
        setFiles(finalFiles);
        onUpload(finalFiles);
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const filesList = event.currentTarget.files;
        if (!filesList) return;
        save(Array.from(filesList));
    };

    const onDropHandler = (event: DragEvent) => {
        event.preventDefault();
        save(Array.from(event.dataTransfer.files));
    };

    const onDragOverHandler = (event: DragEvent) => {
        event.preventDefault();
    };

    return (
        <div className="form__field-upload">
            {files && files.map(file => <Thumbnail file={file} key={file.name.split('.')[0]} />)}
            <label className="form__field-upload-label" onDrop={onDropHandler} onDragOver={onDragOverHandler}>
                <input
                    className="form__field-upload-input"
                    name="imgs[]"
                    multiple
                    type="file"
                    onChange={onChangeHandler}
                    accept="image/*"
                />
                <SvgSprite icon="plus" color="primary" />
            </label>
            {info ? <span className={classes('form__field-upload-info', info.type)}> {info.msg} </span> : null}
        </div>
    );
};

export default FieldUpload;
