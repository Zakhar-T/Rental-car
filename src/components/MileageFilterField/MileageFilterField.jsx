import styles from './MileageFilterField.module.css';

import { useId } from 'react';
import { parseInputValue, parseNumberFromSpaces } from '../../utils/parseFunctions';

import { Field, useFormikContext } from 'formik';

export default function MileageFilterField() {
  const minMileageFieldId = useId();
  const maxMileageFieldId = useId();
  const { setFieldValue, values } = useFormikContext();

  return (
    <div className={styles.milageFilter}>
      <label htmlFor={minMileageFieldId} className={styles.filterLabel}>
        Car mileage / km
      </label>
      <div className={styles.milageFilterField}>
        <Field
          type="text"
          name="minMileage"
          id={minMileageFieldId}
          placeholder="From"
          value={parseInputValue(values.minMileage, 'From')}
          onChange={(e) => setFieldValue('minMileage', parseNumberFromSpaces(e.target.value))}
        />
        <Field
          type="text"
          name="maxMileage"
          id={maxMileageFieldId}
          placeholder="To"
          value={parseInputValue(values.maxMileage, 'To')}
          onChange={(e) => setFieldValue('maxMileage', parseNumberFromSpaces(e.target.value))}
        />
      </div>
    </div>
  );
}
