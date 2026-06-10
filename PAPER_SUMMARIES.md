# Paper summaries and computational achievements
## 2025 — VEM fully discrete Nitsche’s discretization of Coulomb frictional contact-mechanics for mixed-dimensional poromechanical models
**Venue:** Computational Geosciences, 29, article 50 (2025)  
**Summary:** Extends the first-order VEM–Nitsche contact framework from frictionless interfaces to Coulomb frictional contact in mixed-dimensional poromechanics, with normal compliance and the no-penetration limit treated in one formulation.
**Computational / numerical core:**
- First-order Virtual Element Method on polytopal/polyhedral meshes
- Nitsche weak enforcement of normal and tangential contact conditions
- Coulomb friction with normal compliance/no-penetration limit
- Well-posedness and convergence analysis
- Comparison with mixed VEM plus face-bubble stabilization
**Physics application:** Fractured or faulted porous rocks where fluid injection may reactivate faults; examples include geological storage, hydraulic stimulation, and 2D/3D fracture-network poromechanics.
**Achievements:**
- Coulomb-friction extension of the earlier frictionless VEM–Nitsche scheme
- Robustness study with respect to the normal stiffness parameter
- Benchmarking against a mixed VEM formulation with bubble stabilization
- 2D/3D test cases including fluid-induced fault reactivation
- Open research code associated with the paper

## 2025 — VEM-Nitsche fully discrete polytopal scheme for frictionless contact-mechanics
**Venue:** SIAM Journal on Numerical Analysis, 63(1), 81–102 (2025)  
**Summary:** Introduces and analyses a fully discrete VEM–Nitsche formulation for small-strain frictionless contact along fracture or fault interfaces represented as co-dimension-one surfaces.
**Computational / numerical core:**
- First-order VEM generalizing P1 finite elements to polytopal meshes
- Fully discrete Nitsche formulation for weak contact enforcement
- Small-strain linear elasticity with fracture-interface jumps
- Well-posedness proof and convergence analysis
- Optimal first-order error estimate under minimal regularity
**Physics application:** Subsurface contact mechanics in fractured/faulted media, especially models that can later be coupled to Darcy flow for injection-induced fault reactivation or enhanced geothermal stimulation.
**Achievements:**
- Provides the rigorous frictionless foundation for later Coulomb-friction work
- Shows optimal first-order error behaviour
- Demonstrates good nonlinear behaviour of the semismooth Newton solver
- Adapts contact mechanics to complex polytopal meshes

## 2025 — Numerical modelling of thermo-hydro-mechanical processes in fractured porous media
**Venue:** PhD thesis, Université Côte d’Azur, NNT: 2025COAZ5054  
**Summary:** Doctoral synthesis of the modelling, discretisation, nonlinear-solver, and numerical-analysis work on THM processes and contact mechanics in fractured porous media.
**Computational / numerical core:**
- Mixed-dimensional THM models
- Finite volume and finite element discretisations
- VEM and Nitsche contact mechanics
- Energy estimates and thermodynamic consistency
- Nonlinear solvers for coupled flow–heat–mechanics systems
**Physics application:** Fractured geological media under coupled pressure, temperature, and deformation, with applications to geothermal energy, geological storage, and fault/fracture mechanics.
**Achievements:**
- Connects the journal and conference papers into one coherent research programme
- Documents the transition from mixed FE contact formulations to VEM–Nitsche polytopal schemes
- Frames the work for scientific computing and subsurface-risk applications

## 2024 — Discretisations of mixed-dimensional Thermo-Hydro-Mechanical models preserving energy estimates
**Venue:** Journal of Computational Physics, 515, 113295 (2024)  
**Summary:** Develops space-time discretisations for mixed-dimensional THM models that preserve energy estimates for both energy-conservation and entropy-balance formulations.
**Computational / numerical core:**
- Mixed-dimensional THM model with Coulomb friction at matrix–fracture interfaces
- Finite volume discretisation for non-isothermal flow using coercive fluxes
- Tailored non-conservative convective-term discretisation
- Mixed finite element contact mechanics with face-wise Lagrange multipliers
- Discrete energy estimates for energy and entropy formulations
**Physics application:** Deep geothermal stimulation, CO2 geological storage, induced seismicity risk, and fractured porous media with weakly compressible liquid or highly compressible gas.
**Achievements:**
- Energy estimates preserved at the discrete level
- Fixed-point coupling accelerated by Newton–Krylov
- Newton–Raphson for the thermo-hydraulic subsystem
- Semismooth Newton for contact mechanics
- Robust nonlinear-solver behaviour with respect to mesh refinement
- Clarifies when entropy-based approximations need correction in gas cases

## 2024 — VEM–Nitsche fully discrete polytopal scheme for mixed-dimensional poromechanical models with Coulomb frictional contact at matrix-fracture interfaces
**Venue:** ECMOR 2024 Proceedings, Volume 2024, pp. 1–9  
**Summary:** Conference contribution extending the VEM–Nitsche approach toward mixed-dimensional poromechanics with Coulomb frictional contact and Darcy flow on fracture networks.
**Computational / numerical core:**
- Hybrid Finite Volume flow with cell, face and fracture-edge unknowns
- Pressure discontinuity at matrix–fracture interfaces
- First-order VEM for mechanical displacement
- Nitsche contact conditions at matrix–fracture interfaces
- Coulomb friction extension from the frictionless framework
**Physics application:** Geothermal systems, geological storage, and fractured/faulted porous media where flow and mechanical contact interact.
**Achievements:**
- Introduces a polytopal discretisation adapted to geometrically complex fault/fracture networks
- Builds the bridge from the frictionless SIAM scheme to the full Coulomb-friction journal article
- Presents the combined HFV-flow/VEM-mechanics architecture to the reservoir-simulation community

## 2023 — Mixed and Nitsche’s discretizations of Coulomb frictional contact-mechanics for mixed dimensional poromechanical models
**Venue:** Computer Methods in Applied Mechanics and Engineering, 413, 116124 (2023)  
**Summary:** Compares mixed, stabilized mixed, and Nitsche formulations for Coulomb frictional contact in single-phase Darcy flow through fractured deformable porous media.
**Computational / numerical core:**
- Mixed formulation with face-wise constant Lagrange multipliers for surface tractions
- Stabilized mixed formulation to relax compatibility constraints
- Nitsche formulation for contact mechanics
- P1/P2 conforming finite elements for displacement
- Hybrid finite volume discretisation of mixed-dimensional Darcy flow
**Physics application:** Fractured/deformable porous media with frictional matrix–fracture contact, small displacement, and linear poro-elastic matrix behaviour.
**Achievements:**
- Clarifies theoretical connections between mixed, stabilized, and Nitsche formulations
- Compares accuracy, nonlinear convergence, and parameter sensitivity
- Handles complex fracture networks with corners and intersections
- Provides a reference point for the later VEM-based work

## 2023 — Mixed and Nitsche’s discretizations of frictional contact-mechanics in fractured porous media
**Venue:** LSSC 2023, Lecture Notes in Computer Science, pp. 71–80  
**Summary:** Proceedings version presenting frictional contact discretisations in fractured porous media to the large-scale scientific computing community.
**Computational / numerical core:**
- Mixed-dimensional fracture representation
- Comparison of mixed and Nitsche contact formulations
- Darcy-flow/fracture-mechanics coupling
- Nonlinear contact-solver considerations
**Physics application:** Fractured porous media with matrix–fracture frictional contact and flow-driven deformation.
**Achievements:**
- Disseminates the contact-discretisation framework in an HPC/scientific-computing setting
- Condenses the main computational choices behind the CMAME paper
- Highlights solver relevance for large-scale fractured-media simulations

## 2023 — Thermodynamically Consistent discretisation of a Thermo-Hydro-Mechanical model
**Venue:** Finite Volumes for Complex Applications X, pp. 265–273 (FVCA 2023)  
**Summary:** Introduces a thermodynamically consistent THM discretisation for non-isothermal single-phase flow coupled to linear thermo-poro-elasticity.
**Computational / numerical core:**
- Finite volume discretisation for flow and energy equations
- Hybrid Finite Volume example implementation
- Conforming Galerkin/P2 finite element approximation for mechanics
- Discrete energy estimate guided by thermodynamic consistency
- Treatment of nonlinear thermal convection
**Physics application:** Hydraulic stimulation of deep geothermal systems and induced-seismicity risk assessment in CO2 storage.
**Achievements:**
- Establishes the energy-estimate foundation later expanded to mixed-dimensional THM models
- Works for a broad class of thermodynamic single-phase fluid models
- Handles diffusive and convection-dominated energy transport
- Validated on a 2D analytical test case

## 2022 — Digital 2D state observers design for the Navier–Stokes equation
**Venue:** CoDIT 2022, pp. 1026–1030  
**Summary:** Early work at the interface of numerical PDEs and control, focused on digital state observer design for the two-dimensional Navier–Stokes equation.
**Computational / numerical core:**
- Finite-difference discretisation of the 2D Navier–Stokes equation
- Digital state observer construction
- State-estimation viewpoint for nonlinear PDE dynamics
- Control-oriented analysis with observer-gain design
**Physics application:** Fluid dynamics and incomplete-state reconstruction for two-dimensional incompressible flow.
**Achievements:**
- Connects numerical simulation of Navier–Stokes equations with observer-based control theory
- Broadens the computational profile beyond porous-media THM models
- Introduces state-estimation language that is useful for data assimilation and model reduction

