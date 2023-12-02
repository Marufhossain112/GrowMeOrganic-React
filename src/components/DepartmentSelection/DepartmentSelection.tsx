/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function ParentWithThreeChildren({ label, checked, onChange, child1Label, child2Label, child3Label, child1Checked, child2Checked, child3Checked, onChild1Change, onChild2Change, onChild3Change, expanded, onToggle }: any) {
    return (
        <div>
            <FormControlLabel
                label={label}
                control={
                    <Checkbox
                        checked={checked[0] && checked[1] && checked[2]}
                        indeterminate={(checked[0] !== checked[1]) || (checked[0] !== checked[2]) || (checked[1] !== checked[2])}
                        onChange={onChange}
                    />
                }
            />
            <IconButton onClick={onToggle} aria-label="Toggle">
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <Collapse in={expanded}>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                    <FormControlLabel
                        label={child1Label}
                        control={<Checkbox checked={child1Checked} onChange={onChild1Change} />}
                    />
                    <FormControlLabel
                        label={child2Label}
                        control={<Checkbox checked={child2Checked} onChange={onChild2Change} />}
                    />
                    <FormControlLabel
                        label={child3Label}
                        control={<Checkbox checked={child3Checked} onChange={onChild3Change} />}
                    />
                </Box>
            </Collapse>
        </div>
    );
}

function ParentWithTwoChildren({ label, checked, onChange, child1Label, child2Label, child1Checked, child2Checked, onChild1Change, onChild2Change, expanded, onToggle }: any) {
    return (
        <div>
            <FormControlLabel
                label={label}
                control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={onChange}
                    />
                }
            />
            <IconButton onClick={onToggle} aria-label="Toggle">
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <Collapse in={expanded}>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                    <FormControlLabel
                        label={child1Label}
                        control={<Checkbox checked={child1Checked} onChange={onChild1Change} />}
                    />
                    <FormControlLabel
                        label={child2Label}
                        control={<Checkbox checked={child2Checked} onChange={onChild2Change} />}
                    />
                </Box>
            </Collapse>
        </div>
    );
}

export default function MultipleParents() {
    const [customerServiceChecked, setCustomerServiceChecked] = React.useState([false, false]);
    const [customerServiceExpanded, setCustomerServiceExpanded] = React.useState(false);

    const handleCustomerServiceChange1 = (event: any) => {
        setCustomerServiceChecked([event.target.checked, event.target.checked]);
    };

    const handleCustomerServiceChange2 = (event: any) => {
        setCustomerServiceChecked([customerServiceChecked[0], event.target.checked]);
    };

    const handleCustomerServiceToggle = () => {
        setCustomerServiceExpanded(!customerServiceExpanded);
    };

    const [designExpanded, setDesignExpanded] = React.useState(false);
    const [designChecked, setDesignChecked] = React.useState([false, false, false]);

    const handleDesignChange1 = (event: any) => {
        setDesignChecked([event.target.checked, event.target.checked, event.target.checked]);
    };

    const handleDesignChange2 = (event: any) => {
        setDesignChecked([event.target.checked, designChecked[1], designChecked[2]]);
    };

    const handleDesignChange3 = (event: any) => {
        setDesignChecked([designChecked[0], event.target.checked, designChecked[2]]);
    };

    const handleDesignChange4 = (event: any) => {
        setDesignChecked([designChecked[0], designChecked[1], event.target.checked]);
    };

    const handleDesignToggle = () => {
        setDesignExpanded(!designExpanded);
    };

    return (
        <div>
            <ParentWithTwoChildren
                label="customer_service"
                checked={customerServiceChecked}
                onChange={handleCustomerServiceChange1}
                child1Label="support"
                child1Checked={customerServiceChecked[0]}
                onChild1Change={handleCustomerServiceChange1}
                child2Label="customer_success"
                child2Checked={customerServiceChecked[1]}
                onChild2Change={handleCustomerServiceChange2}
                expanded={customerServiceExpanded}
                onToggle={handleCustomerServiceToggle}
            />

            <ParentWithThreeChildren
                label="design"
                checked={designChecked}
                onChange={handleDesignChange1}
                child1Label="graphic_design"
                child1Checked={designChecked[0]}
                onChild1Change={handleDesignChange2}
                child2Label="product_design"
                child2Checked={designChecked[1]}
                onChild2Change={handleDesignChange3}
                child3Label="web_design"
                child3Checked={designChecked[2]}
                onChild3Change={handleDesignChange4}
                expanded={designExpanded}
                onToggle={handleDesignToggle}
            />
        </div>
    );
}
