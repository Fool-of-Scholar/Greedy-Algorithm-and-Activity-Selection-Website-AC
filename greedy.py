def generic_greedy_solver(candidates):
    solution = [1, 6, 7, 8]  # Initial solution
    candidates.sort()        # Simple heuristic: sort ascending
    
    for c in candidates:
        if c not in solution:  # Compatibility check: avoid duplicates
            solution.append(c)
    
    return solution

# Example usage
candidates = [2, 5, 6, 9, 3]
print(generic_greedy_solver(candidates))
